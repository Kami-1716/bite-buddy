import express, { Request, Response } from "express";
import cors from "cors";
import "dotenv/config";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
app.use(express.static("public"));
app.use(cors());

// routes
import userRoutes from "./routes/user.routes";
app.use("/api/v1/user", userRoutes);

export default app;
