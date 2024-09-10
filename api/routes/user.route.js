import express from "express";
import { getUser, signout } from "../controller/user.controller.js";

const router = express.Router();
router.get("/:userId", getUser);
router.post("/signout", signout);

export default router;
