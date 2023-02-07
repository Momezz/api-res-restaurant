import { Router } from "express";
import { hasRole, isAuthenticated } from "../../auth/auth.services";
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
// DELETE /api/menu/:id  -linea en  links importantes
router.delete('/:id', isAuthenticated, hasRole(['ADMIN']), handleDeleteMenu);

export default router;
