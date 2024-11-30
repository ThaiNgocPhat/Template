import { transporter } from "../config/mail.js"
import {PASSWORD_RESET_SUCCESS_TEMPLATE} from './resetPasswordTemplate.js'

export const sendPasswordResetSuccessEmail = (email) => {
    transporter.sendMail({
        to: email,
        subject: 'Password reset successful',
        html: PASSWORD_RESET_SUCCESS_TEMPLATE
    }, (error, info) => {

        if (error) {
            throw new Error('Error sending password reset success email' + error.message);
        } else {
            console.log('Password reset success email sent successfully', info);
        }
    })
}