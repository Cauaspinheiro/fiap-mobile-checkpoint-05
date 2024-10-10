import { Router } from "express";
import * as tarefaController from "../controllers/tarefaController";

export const tarefaRoutes = Router();

// Rota para criar nova tarefa
tarefaRoutes.post("/tarefas", tarefaController.createTarefa);

// Rota para listar todas as tarefas
tarefaRoutes.get("/tarefas", tarefaController.getTarefas);

// Rota para obter uma tarefa específica
tarefaRoutes.get("/tarefas/:id", tarefaController.getTarefaById);

// Rota para atualizar uma tarefa
tarefaRoutes.put("/tarefas/:id", tarefaController.updateTarefa);

// Rota para deletar uma tarefa
tarefaRoutes.delete("/tarefas/:id", tarefaController.deleteTarefa);
