import User from "../model/user.model.js";
import bcyryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { errorHandler } from "../utils/error.js";
import { configDotenv } from "dotenv";
configDotenv.apply();
export const signup = async (req, res, next) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    next(errorHandler(400, "All fields are required"));
  }
  const hashPassword = bcyryptjs.hashSync(password, 10);

  const newUser = new User({
    firstname,
    lastname,
    email,
    password: hashPassword,
  });
  try {
    const user = await newUser.save();
    res.json({ user, message: "Signup Successfull" });
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return next(errorHandler(400, "All fields are required"));
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return next(errorHandler(400, "User not found"));
    }
    const validPassword = bcyryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return next(errorHandler(400, "Please enter correct password"));
    }
    const token = jwt.sign(
      { id: validUser._id, isAdmin: validUser.isAdmin },
      process.env.JWT_SECRET
    );
    const { password: pass, ...rest } = validUser._doc;
    res
      .status(200)
      .cookie("access_token", token, {
        httpOnly: true,
      })
      .json(rest);
  } catch (error) {
    next(error);
  }
};
