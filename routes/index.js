import express from "express";
import authRoute from "./auth_route.js";
import listingRoute from "./listing_route.js";
import userRoute from "./user_route.js";

const router = express.Router();

router.use("/auth", authRoute);
router.use("/listing", listingRoute);
router.use("/user", userRoute);

export default router;


