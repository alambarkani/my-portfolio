import { Router } from "express"
import homeController from "../controllers/homeController.js"

const router = Router()

const index = router.get('/', homeController.index)

export default {
    index
}