// utils/mailer.js
import { Resend } from "resend";
import dotenv from "dotenv";

dotenv.config();

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendVerificationEmail(to, token) {
  const link = `${process.env.CLIENT_URI}/verify-email?token=${token}`;

  const { data, error } = await resend.emails.send({
    from: process.env.RESEND_FROM_EMAIL,
    to: [to],
    subject: "Activa tu cuenta",
    html: `
      <p>Bienvenido, para activar tu cuenta haz clic en el siguiente enlace:</p> 

      <p>
        <a href="${link}">Activar mi cuenta</a>
      </p>

      <p>O copia y pega el siguiente enlace en tu navegador:</p>

      <p>${link}</p>

      <p>Este enlace expira en 24 horas.</p>
    `
  });

  if (error) {
    console.error("Error de Resend:", error);
    throw new Error("No se pudo enviar el correo de verificación.");
  }

  console.log("Correo de verificación enviado:", data?.id);
}

