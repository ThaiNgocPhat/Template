import AdminController from "../controllers/AdminController.js";
import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware.js";

const router = Router();

router.post("/register", AdminController.adminRegister);
router.post("/login", AdminController.adminLogin);
router.get('/test', authMiddleware.verifyToken, (req, res) => {
    res.status(200).json({ data: "test" });
})

export default router;

