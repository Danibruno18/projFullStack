import express from "express";
import { getLivros } from "../controllers/livros.js";

const router = express.Router();

router.get("/", getLivros);

export default router;
