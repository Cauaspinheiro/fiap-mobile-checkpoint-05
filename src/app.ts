import express from "express";
import { tarefaRoutes } from "./routes/tarefaRoutes";

export const app = express();

app.use(express.json());

app.use("/api", tarefaRoutes);
