import mongoose from "mongoose";
const jobSchema = mongoose.Schema(
  {
    logo: {
      type: String,
      default:
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png",
    },
    Company: {
      type: String,
      required: true,
    },
    Position: {
      type: String,
      required: true,
    },
    Location: {
      type: String,
      required: true,
    },
    CompaniesLocation: {
      type: String,
      required: true,
    },
    Opening: {
      type: String,
      required: true,
    },
    Description: {
      type: String,
      required: true,
    },
  },
  { timestanps: true }
);
const Job = mongoose.model("Job", jobSchema);
export default Job;
