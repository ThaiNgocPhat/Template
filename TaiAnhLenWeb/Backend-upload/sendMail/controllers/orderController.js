import {sentOrderSuccessEmail} from '../order/order.js'

export const Order = (req, res) => {
    try{
        const {email} = req.body;
        const message = 'Your order has been received successfully';
        sentOrderSuccessEmail(email, message);
        res.status(200).json({message});
    }catch(error){
        res.status(500).json({error: error.message});
    }
}