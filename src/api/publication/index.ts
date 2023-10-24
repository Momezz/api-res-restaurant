import { Router } from "express";
import {
  handleGetAllPublications,
  handleGetPublicationById,
  handleCreatePublication,
  handleUpdatePublication,
  handleDeletePublication
} from "./publication.controller";

const router = Router();

router.get("/", handleGetAllPublications);
router.get("/:id", handleGetPublicationById);
router.post("/", handleCreatePublication);
router.patch('/:id', handleUpdatePublication);
router.delete('/:id', handleDeletePublication);

export default router;