import { Router } from "express";
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
router.delete('/:id', handleDeleteMenu);

export default router;
