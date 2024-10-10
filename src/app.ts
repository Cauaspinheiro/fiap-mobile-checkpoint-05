import express from "express";
import { tarefaRoutes } from "./routes/tarefaRoutes";
import { userRoutes } from "./routes/userRoutes";
import { authMiddleware } from "./middlewares/authMiddleware";

export const app = express();

app.use(express.json());

// Rotas
app.use("/api", userRoutes); // Rota para autenticação

// Rotas protegidas
app.use(authMiddleware as any);
app.use("/api/tarefas", tarefaRoutes);
