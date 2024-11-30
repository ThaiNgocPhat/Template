import { sendLoginSuccessEmail } from "../login/login.js";

export const Login = (req, res) => {
    try {
        const { email } = req.body;
        const message = 'You have logged in successfully';
        sendLoginSuccessEmail(email, message);
        res.status(200).json({ message });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
