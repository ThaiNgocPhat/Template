import { ORDER_EMAIL_TEMPLATE } from "./orderTemplate.js";
import {transporter} from '../config/mail.js'

export const sentOrderSuccessEmail = (email, message) => {
    transporter.sendMail({
        to: email,
        subject: 'Order Received',
        html: ORDER_EMAIL_TEMPLATE.replace("{message}", message)
    },(error, info) => {
        if(error){
            throw new Error('Error sending order success email' + error.message);
        }else{
            console.log('Order success email sent successfully', info);
        }
    }
    )
}