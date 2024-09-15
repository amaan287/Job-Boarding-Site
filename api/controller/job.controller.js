import Job from "../model/job.model.js";
export const postjob = async (req, res) => {
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
    !Company |
    !Position |
    !Location |
    !CompaniesLocation |
    !Opening |
    !Description
  ) {
    res.status(500).json({ message: "All Fields required" });
  }
  const newJob = new Job({
    logo,
    Company,
    Position,
    Location,
    CompaniesLocation,
    Opening,
    Description,
  });
  try {
    const job = await newJob.save();
    res.status(200).json({ message: job });
    console.log(job);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export const getPost = async (req, res) => {
  try {
    const { id } = req.params;
    const job = await Job.findById(id);
    res.status(200).json(job);
  } catch (error) {
    res.status(500).json({ message: error });
  }
};
