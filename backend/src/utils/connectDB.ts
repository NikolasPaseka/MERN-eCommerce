import mongoose from 'mongoose';
import dotenv from 'dotenv';

export const connectDB = () => {
	dotenv.config();

	const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tsamazonadb';

	mongoose.set('strictQuery', true);
	mongoose
		.connect(MONGODB_URI)
		.then(() => {
			console.log('connected to mongodb');
		})
		.catch(() => {
			console.log('error mongodb');
		});
};
