import { Request, Response, NextFunction } from "express";
import { AuthRequest } from "../../auth/auth.types";
import {
  getAllMenus,
  getMenuById,
  createMenu,
  updateMenu,
  deleteMenu,
} from "./menu.services";
//import { AuthRequest } from "../../auth/auth.types";

export async function handleGetAllMenus(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const menus = await getAllMenus();
    return res.status(200).json(menus);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
}

export async function handleGetMenuById(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const menu = await getMenuById(id);

  if (!menu) {
    return res.status(404).json({ message: "Menu not found" });
  }
  return res.status(200).json(menu);
}

export async function handleCreateMenu(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const data = req.body;
  try {
    const newMenu = await createMenu(data);
    return res.status(201).json(newMenu);
  } catch (error) {
    return res.status(500).json(error);
  }
}

export async function handleUpdateMenu(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  const data = req.body;

  const menu = await updateMenu(id, data);
  if (!menu) {
    return res.status(404).json({ message: "Menu not found" });
  }
  return res.status(200).json(menu);
}

export async function handleDeleteMenu(
  req: AuthRequest,
  res: Response,
  next: NextFunction
) {
  const { id } = req.params;
  try {
    const menu = await deleteMenu(id);
    if(!menu) {
      return res.status(404).json({message: "Menu not found"});
    }
    return res.status(200).json({ message: "Menu deleted" });
  } catch (error) {
    return res.status(500).json(error);
  }
}
