import { transporter } from "../config/mail.js"
import {PASSWORD_RESET_REQUEST_TEMPLATE} from './resetPaswordTemplate.js'

export const sendPasswordResetEmail = (email, resetURL) => {
    transporter.sendMail({
        to: email,
        subject: 'Reset Password',
        html:PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL)
    }, (error, info)=> {
        if(error){
            throw new Error('Error sending password reset email' + error.message);
        }else{
            console.log('Password reset email sent successfully', info);
        }
    }
    )
}