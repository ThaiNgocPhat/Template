import cors from 'cors';
import express from 'express';
import morgan from 'morgan';
import AdminRouter from './routes/AdminRouter.js';

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api/admin', AdminRouter);
app.use(cors());

app.listen(3000, () => {
    console.log('Server on port 3000');
})