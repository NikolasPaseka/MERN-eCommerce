import express, { Request, Response } from 'express';
import catchAsync from '../utils/catchAsync';
import { ProductModel } from '../models/ProductModel';

export const productRouter = express.Router();

productRouter.get(
	'/',
	catchAsync(async (req: Request, res: Response) => {
		const products = await ProductModel.find();
		res.json(products);
	})
);

productRouter.get(
	'/:slug',
	catchAsync(async (req: Request, res: Response) => {
		const product = await ProductModel.findOne({ slug: req.params.slug });
		res.json(product);
	})
);
