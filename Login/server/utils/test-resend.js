import dotenv from "dotenv";
import { sendVerificationEmail } from "./mailer.js";

dotenv.config();

const testEmail = "delivered@resend.dev";
const testToken = "token-de-prueba-123";

try {
  await sendVerificationEmail(testEmail, testToken);

  console.log("✅ sendVerificationEmail funcionó correctamente.");
} catch (error) {
  console.error("❌ Error en sendVerificationEmail:");
  console.error(error);
}