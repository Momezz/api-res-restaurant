import { Router } from "express";
import {
  handleGetAllOrders,
  handleGetOrderById,
  handleCreateOrder,
  handleUpdateOrder,
  handleDeleteOrder
} from "./order.controller";

const router = Router();

// GET /api/orders
router.get("/", handleGetAllOrders);
// GET /api/order/:id
router.get("/:id", handleGetOrderById);
// POST /api/order
router.post("/", handleCreateOrder);
// PATCH /api/order/:id
router.patch('/:id', handleUpdateOrder);
// DELETE /api/order/:id
router.delete('/:id', handleDeleteOrder);

export default router;
