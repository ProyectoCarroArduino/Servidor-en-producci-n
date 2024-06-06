import express from "express";
import { login, logout, refresh, register, user, profile, analyzeCode } from "../../controlllers/authController.js";
import { authentication } from "../../middlewares/authentication.js";
import { auth } from "../../middlewares/auth.js";

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refresh);
router.get("/user", authentication, auth, user);
router.get("/profile", authentication, auth, profile);


router.post("/analyze", analyzeCode);


export default router;