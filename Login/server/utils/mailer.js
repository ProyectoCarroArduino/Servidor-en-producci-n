// utils/mailer.js
import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

const transporter = nodemailer.createTransport({
  service: "gmail",    // o el proveedor que uses
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

export async function sendVerificationEmail(to, token) {
  const link = `${process.env.CLIENT_URI}/verify-email?token=${token}`;
  await transporter.sendMail({
    from: `"Tu App" <${process.env.EMAIL_USER}>`,
    to: to,  // Usar el parámetro "to" que se pasa a la función
    subject: "Activa tu cuenta",
    html: `
      <p>Bienvenido, para activar tu cuenta haz clic en el siguiente enlace:</p>
      <a href="${link}">${link}</a>
      <p>Este enlace expira en 24 horas.</p>
    `
  });
}

