import express from "express";
import { verifyToken } from "../middleware/authenticate.js";
import { deleteUser, getUserListings, updateUser } from "../controllers/user_controller.js";

const router = express.Router();

router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
router.get("/listings/:id", getUserListings);

export default router;
