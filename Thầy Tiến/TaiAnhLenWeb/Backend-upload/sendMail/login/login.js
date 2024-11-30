import { transporter } from "../config/mail.js";
import { LOGIN_SUCCESS_EMAIL_TEMPLATE } from "./loginTemplate.js";

export const sendLoginSuccessEmail = (email, message) => {
    transporter.sendMail({
        to: email,
        subject: 'Verify your email',
        html: LOGIN_SUCCESS_EMAIL_TEMPLATE.replace("{message}", message)
    }, (error, info) => {
        if (error) {
            throw new Error('Error sending login email' + error.message);
        } else {
            console.log('Login email sent successfully', info);
        }
    })
}