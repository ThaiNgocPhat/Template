import { sendVerificationEmail } from "../mail/emails.js";

export const Register = (req, res) => {
    try {
        const { email } = req.body;
        const code = 123456;
        sendVerificationEmail(email, code);
        res.status(201).json(email);
    } catch (error) {
        res.status(500).json({ error: 'Error registering user' });
    }
}