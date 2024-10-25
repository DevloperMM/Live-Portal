import { Router } from "express";
import { fetchData } from "../controllers/portal.controller.js";

const router = Router();

router.get("", fetchData);

export default router;
