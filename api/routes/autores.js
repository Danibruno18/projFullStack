import express from "express";
import { getAutores } from "../controllers/autores.js";

const router = express.Router();

router.get("/", getAutores);

export default router;
