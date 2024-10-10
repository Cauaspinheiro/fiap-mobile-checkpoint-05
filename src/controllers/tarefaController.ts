import { Request, Response } from "express";

import { db } from "../db/database";

export function createTarefa(req: Request, res: Response) {
  const { tarefa } = req.body;

  db.run("INSERT INTO tarefas (tarefa) VALUES (?)", [tarefa], function (err: Error) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(201).json({ id: tarefa.id, tarefa });
  });
}

export function getTarefas(req: Request, res: Response) {
  db.all("SELECT * FROM tarefas", [], (err: Error, rows: any[]) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    res.status(200).json(rows);
  });
}

export function getTarefaById(req: Request, res: Response) {
  const { id } = req.params;
  db.get("SELECT * FROM tarefas WHERE id = ?", [id], (err: Error | null, row: any) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }
    if (row) {
      res.status(200).json(row);
    } else {
      res.status(404).json({ error: "Tarefa não encontrada!" });
    }
  });
}

export function updateTarefa(req: Request, res: Response) {
  const { id } = req.params;
  const { tarefa } = req.body;

  db.run("UPDATE tarefas SET tarefa = ? WHERE id = ?", [tarefa, id], (err: Error | null) => {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (this.changes) {
      res.status(200).json({ message: "Tarefa atualizada com sucesso!" });
    } else {
      res.status(404).json({ error: "Tarefa não encontrada!" });
    }
  });
}

export function deleteTarefa(req: Request, res: Response) {
  const { id } = req.params;

  db.run("DELETE FROM tarefas WHERE id = ?", [id], function (err: Error | null) {
    if (err) {
      return res.status(500).json({ error: err.message });
    }

    if (this.changes) {
      res.status(200).json({ message: "Tarefa removida com sucesso!" });
    } else {
      res.status(404).json({ error: "Tarefa não encontrada!" });
    }
  });
}
