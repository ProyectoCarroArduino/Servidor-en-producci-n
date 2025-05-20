import express from "express";
import { login, logout, refresh, register, user, profile, analyzeCode, changePassword, checkEmail, checkUsername } from "../../controlllers/authController.js";
import { authentication } from "../../middlewares/authentication.js";
import { auth } from "../../middlewares/auth.js";
import { verifyEmail } from "../../middlewares/verifyEmail.js";

const router = express.Router();


// ruta de verificación de email
router.get("/verify-email", verifyEmail, (req, res) => {
  // aquí solo enviamos el mensaje que preparó el middleware
  res.json({ message: res.locals.verifyMessage });
});

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.post("/refresh", refresh);
router.get("/user", authentication, auth, user);
router.get("/profile", authentication, auth, profile);
router.post('/changePassword', authentication, changePassword);

router.post('/check-email', checkEmail);
router.post('/check-username', checkUsername);


router.post("/analyze", analyzeCode);


export default router;