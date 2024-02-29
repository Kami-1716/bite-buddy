import express from "express";
import { createNewUser } from "../controllers/user.controller";
import { jwtCheck } from "../middlewares/auth0.middleware";

const router = express.Router();

router.route("/").post(jwtCheck, createNewUser);

export default router;
