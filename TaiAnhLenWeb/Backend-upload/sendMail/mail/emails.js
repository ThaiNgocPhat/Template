import { transporter } from "../config/mail.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplate.js";

export const sendVerificationEmail = (email, verificationToken) => {
    transporter.sendMail({
        to: email,
        subject: 'Verify your email',
        html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationToken}", verificationToken)
    }, (error, info) => {
        if (error) {
            throw new Error('Error sending verification email' + error.message);
        } else {
            console.log('Verification email sent successfully', info);
        }
    })
}