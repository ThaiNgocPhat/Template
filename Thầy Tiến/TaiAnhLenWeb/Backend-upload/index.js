import express from 'express';
import bodyParser from 'body-parser';
import sequelize from './db.js';
import Product from './ProductModel.js';
import cors from 'cors';
import PaymentRouter from './payment/PaymentRouter.js'
import AuthRouter from './sendMail/routers/authRegister.js'
import OrderRouter from './sendMail/routers/orderRouter.js'
import LoginRouter from './sendMail/routers/loginRouter.js'
import UserRouter from './sendMail/routers/UserRouter.js'

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/add-product', async (req, res) => {
    try {
        const { name, description, imgUrl } = req.body;
        const product = new Product({ name, description, imgUrl });
        await product.save();
        res.status(201).json({ message: 'Product added successfully', data: product });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});
app.use('/api', PaymentRouter);
app.use('/api/auth', AuthRouter);
app.use('/api/order', OrderRouter);
app.use('/api/login', LoginRouter);
app.use('/api/user', UserRouter);
app.get('/products', async (req, res) => {
    try {
        const products = await Product.findAll();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

sequelize.sync().then(() => {
    console.log('Database connected');
    const PORT = 8800;
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});
