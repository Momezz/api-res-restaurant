import Menu, { MenuDocument } from "./menu.model";
import { DocumentDefinition } from 'mongoose';

export function getAllMenus() {
  return Menu.find({}, { password: 0 });
}

export function getMenuById(id: string) {
  return Menu.findById(id);
}

export function createMenu(
  input: DocumentDefinition<Omit<MenuDocument, 'createdAt' | 'updatedAt'>>,) {
  return Menu.create(input);
}

export function updateMenu(id: String,
  menu: DocumentDefinition<Omit<MenuDocument, 'createdAt' | 'updatedAt'>>,) {
  return Menu.findByIdAndUpdate(id, menu, { new: true });
}

export function deleteMenu(id: string) {
  const deleteMenu = Menu.findByIdAndDelete(id);
  return deleteMenu;
}
