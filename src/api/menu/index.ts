import { Router } from "express";
import {
  handleGetAllMenus,
  handleGetMenuById,
  handleCreateMenu,
  handleUpdateMenu,
  handleDeleteMenu
} from "./menu.controller";
import { isAuthenticated, hasRole } from "../../auth/auth.services";

const router = Router();
router.get("/", handleGetAllMenus);
router.get("/:id", handleGetMenuById);
router.post("/",  isAuthenticated, hasRole(['ADMIN']), handleCreateMenu);
router.patch('/:id', isAuthenticated, hasRole(['ADMIN']), handleUpdateMenu);
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteMenu);

export default router;
