import { postjob, getPost } from "../controller/job.controller.js";
import express from "express";

const router = express.Router();
router.post("/postJob", postjob);
router.get("/:id", getPost);
export default router;
