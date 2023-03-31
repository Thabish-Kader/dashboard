import express from "express";
import Product from "../models/Product";

const router = express.Router();

router.get("/products", async (req, res) => {
	try {
		const products = await Product.find();
		res.status(200).json(products);
	} catch (error) {
		let message = "";
		if (error instanceof Error) return (message = error.message);
		res.status(404).json({ message: message });
	}
});

export default router;
