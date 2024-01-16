import { Router } from "express";
import profileController from "../controllers/profileController.js";

const router = Router();

const cv = router.get('/cv', profileController.cv)

export default {
    cv
}