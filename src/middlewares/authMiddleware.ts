import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
  const token = req.headers["authorization"];

  if (!token) {
    return res.status(403).json({ error: "Nenhum token fornecido!" });
  }

  jwt.verify(token, "secreta-chave", (err, decoded) => {
    if (err) {
      return res.status(401).json({ error: "Token inválido!" });
    }

    Object.assign(req, { user: decoded });

    next();
  });
}
