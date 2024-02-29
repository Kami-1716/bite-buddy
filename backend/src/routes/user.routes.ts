import express from "express";
import { createNewUser, updateUser } from "../controllers/user.controller";
import { jwtCheck, jwtParse } from "../middlewares/auth0.middleware";
import { validateMyUserRequest } from "../middlewares/validation.middleware";

const router = express.Router();

router.route("/").post(jwtCheck, createNewUser);
router.route("/").put(jwtCheck, jwtParse, validateMyUserRequest, updateUser);

export default router;
