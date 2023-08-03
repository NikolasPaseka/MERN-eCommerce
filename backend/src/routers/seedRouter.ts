import express, { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { ProductModel } from '../models/ProductModel';
import { sampleProducts } from '../data';

export const seedRouter = express.Router();

seedRouter.get(
	'/',
	catchAsync(async (req: Request, res: Response) => {
		await ProductModel.deleteMany({});
		const createdProducts = await ProductModel.insertMany(sampleProducts);
		res.send({ createdProducts });
	})
);
