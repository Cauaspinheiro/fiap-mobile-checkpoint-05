import { Router } from "express";
import * as userController from "../controllers/userController";

export const userRoutes = Router();

// Rota para cadastro de usuário
userRoutes.post("/register", userController.registerUser);

// Rota para login de usuário
userRoutes.post("/login", userController.loginUser);
