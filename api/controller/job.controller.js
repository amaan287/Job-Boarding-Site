import Job from "../model/job.model.js";
import { errorHandler } from "../utils/error.js";
export const postjob = async (req, res, next) => {
  const {
    logo,
    Company,
    Position,
    Location,
    CompaniesLocation,
    Opening,
    Description,
  } = req.body;

  if (
    !Company ||
    !Position ||
    !Location ||
    !CompaniesLocation ||
    !Opening ||
    !Description
  ) {
    return next(errorHandler(400, "All fields are required"));
  }

  const slug = req.body.Position.split(" ")
    .join("-")
    .toLowerCase()
    .replace(/[^a-zA-Z0-9-]/g, "");

  const newJob = new Job({
    ...req.body,
    slug,
    userId: req.user.id,
  });

  try {
    const job = await newJob.save();
    res.status(200).json({ message: job });
    console.log(job);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(200).json(job);
  } catch (error) {
    next(error);
  }
};
