import express from "express";
import KPI from "../models/KPI";

const router = express.Router();
router.get("/kpis", async (req, res) => {
	try {
		const kpis = await KPI.find();
		res.status(200).json(kpis);
	} catch (error) {
		let message = "";
		if (error instanceof Error) return (message = error.message);
		res.status(404).json({ message: message });
	}
});

export default router;
