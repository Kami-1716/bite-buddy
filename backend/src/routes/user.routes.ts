import express from "express";
import { createNewUser } from "../controllers/user.controller";

const router = express.Router();

router.route("/").post(createNewUser);

export default router;
