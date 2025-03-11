import nodemailer from "nodemailer";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nome, email, mensagem } = req.body;

        // Configura o transporte de e-mail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        // Configura o e-mail
        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_TO,
            subject: `Nova mensagem de ${nome}`,
            text: `Nome: ${nome}\nE-mail: ${email}\nMensagem: ${mensagem}`,
        };

        // Envia o e-mail
        try {
            await transporter.sendMail(mailOptions);
            res.status(200).json({ success: true });
        } catch (error) {
            console.error(error);
            res.status(500).json({ success: false });
        }
    } else {
        res.status(405).json({ message: "Método não permitido" });
    }
}