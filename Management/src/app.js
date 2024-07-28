import express from 'express';
import ProductCatetegoryRoutes from './routes/ProductCategoryRoutes.js';
import ProductInventoryRoutes from './routes/ProductInventoryRoutes.js';
import DiscountRoutes from './routes/DiscountRoutes.js';
import ProductRoutes from './routes/ProductRoutes.js';
import PaymentDetailsRoutes from './routes/PaymentDetailsRoutes.js';
import UserRoutes from './routes/UserRoutes.js'
import OrderDetailsRoutes from './routes/OrderDetailsRoutes.js';
import OrderItemsRoutes from './routes/OrderItemsRoutes.js';
import ShoppingSessionRoutes from './routes/ShoppingSessionRoutes.js';
import CartItemRoutes from './routes/CartItemRoutes.js';
import UserAddressRoutes from './routes/UserAddressRoutes.js';
import UserPaymentRoutes from './routes/UserPaymentRoutes.js';

const app = express();
app.use(express.json());
app.use('/productcatetegory', ProductCatetegoryRoutes);
app.use('/productinventory', ProductInventoryRoutes);
app.use('/discount', DiscountRoutes);
app.use('/product', ProductRoutes);
app.use('/paymentdetails', PaymentDetailsRoutes);
app.use('/user', UserRoutes);
app.use('/orderdetails', OrderDetailsRoutes);
app.use('/orderitems', OrderItemsRoutes);
app.use('/shoppingsession', ShoppingSessionRoutes);
app.use('/cartitem', CartItemRoutes);
app.use('/useraddress', UserAddressRoutes);
app.use('/userpayment', UserPaymentRoutes);

app.listen(6500,() => {
    console.log('Server is running on port 6500');
})