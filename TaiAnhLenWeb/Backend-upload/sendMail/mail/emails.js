import { transporter } from "../config/mail.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";
import { LOGIN_SUCCESS_EMAIL_TEMPLATE } from "../login/loginTemplate.js";

export const sendVerificationEmail = (email, verificationCode) => {
    transporter.sendMail({
        to: email,
        subject: 'Verify your email',
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", verificationCode)
    }, (error, info) => {
        if (error) {
            throw new Error('Error sending verification email' + error.message);
        } else {
            console.log('Verification email sent successfully', info);
        }
    })
}

export const sendLoginSuccessEmail = (email, name) => {
    transporter.sendMail({
        to: email,
        subject: 'Welcome to User',
        html: LOGIN_SUCCESS_EMAIL_TEMPLATE.replace("{name}", name)
    }, (error, info) => {
        if (error) {
            throw new Error('Error sending welcome email' + error.message);
        } else {
            console.log('Welcome email sent successfully', info);
        }
    });
}