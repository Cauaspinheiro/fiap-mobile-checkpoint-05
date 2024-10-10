import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController";
import { authMiddleware } from "../middlewares/authMiddleware";

export const tarefaRoutes = Router();

tarefaRoutes.use(authMiddleware as any);

// Rota para criar nova tarefa
tarefaRoutes.post("/", tarefaController.createTarefa);

// Rota para listar todas as tarefas
tarefaRoutes.get("/", tarefaController.getTarefas);

// Rota para obter uma tarefa específica
tarefaRoutes.get("/:id", tarefaController.getTarefaById);

// Rota para atualizar uma tarefa
tarefaRoutes.put("/:id", tarefaController.updateTarefa);

// Rota para deletar uma tarefa
tarefaRoutes.delete("/:id", tarefaController.deleteTarefa);
