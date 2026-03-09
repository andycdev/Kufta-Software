/* global process */
import { Resend } from "resend";

const resend = new Resend(process.env.API_KEY);

export default async function handler(req, res) {
  // Solo permitir método POST
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Método no permitido" });
  }

  const { name, email, message } = req.body;

  try {
    const data = await resend.emails.send({
      from: "Kufta Contact <onboarding@resend.dev>", // Resend te da este por defecto
      to: ["tech.andresb@gmail.com"], // A donde quieres que llegue
      subject: `Nuevo mensaje de ${name}`,
      html: `
        <h2>Nuevo mensaje desde Kufta Software</h2>
        <p><strong>Nombre:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mensaje:</strong></p>
        <p>${message}</p>
      `,
    });

    return res.status(200).json({ success: true, data });
  } catch (error) {
    return res.status(500).json({ success: false, error: error.message });
  }
}
