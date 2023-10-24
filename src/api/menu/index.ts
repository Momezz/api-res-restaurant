import { Router } from "express";
import {
  handleGetAllMenus,
  handleGetMenuById,
  handleCreateMenu,
  handleUpdateMenu,
  handleDeleteMenu
} from "./menu.controller";

const router = Router();

router.get("/", handleGetAllMenus);
router.get("/:id", handleGetMenuById);
router.post("/", handleCreateMenu);
router.patch('/:id', handleUpdateMenu);
router.delete('/:id', handleDeleteMenu);
// router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteMenu);

export default router;
