import express from 'express';
import cors from 'cors';
import { connectDB } from './utils/connectDB';
import { productRouter } from './routers/productRouter';
import { seedRouter } from './routers/seedRouter';

const app = express();

// connect to a mongo database
connectDB();

app.use(
	cors({
		credentials: true,
		origin: ['http://localhost:5173'],
	})
);

app.use('/api/products', productRouter);
app.use('/api/seed', seedRouter);

const PORT = 4000;
app.listen(PORT, () => {
	console.log(`Server started at port: ${PORT}`);
});
