import User from "../model/user.model.js";
import bcyryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import { configDotenv } from "dotenv";
configDotenv.apply();
export const signup = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;
  if (!firstname || !lastname || !email || !password) {
    res.status(400).json({ message: "All fields are required" });
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
    res.json({ message: error });
  }
};

export const signin = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const validPassword = bcyryptjs.compareSync(password, validUser.password);
    if (!validPassword) {
      return res.status(400).json({ message: "Please enter correct password" });
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
    res.status(500).json({ message: "something went wrong" });
  }
};
