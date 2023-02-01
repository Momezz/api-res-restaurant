import { Router } from "express";
import { isAuthenticated } from "../../auth/auth.services";
import {
  handleGetAllMenus,
  handleGetMenuById,
  handleCreateMenu,
  handleUpdateMenu,
  handleDeleteMenu
} from "./menu.controller";

const router = Router();

// GET /api/menu
router.get("/", handleGetAllMenus);
// GET /api/menu/:id
router.get("/:id", handleGetMenuById);
// POST /api/menu
router.post("/", handleCreateMenu);
// PATCH /api/menu/:id
router.patch('/:id', handleUpdateMenu);
// DELETE /api/menu/:id
router.delete('/:id', isAuthenticated, handleDeleteMenu);

export default router;
