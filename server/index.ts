import express from "express";
import bodyParser from "body-parser";
import mongoose, { ConnectOptions } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import kpiRoutes from "./routes/kpi";
import productRoutes from "./routes/product";
import Product from "./models/Product";
import KPI from "./models/KPI";
import { kpis, products } from "./data";

// config
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

// routes
app.use("/kpi", kpiRoutes);
app.use("/product", productRoutes);

// Mongoose config
const PORT = process.env.PORT || 9000;
mongoose
	.connect(process.env.MONGO_URL!, {
		useNewUrlParser: true,
		useUnifiedTopology: true,
	} as ConnectOptions)
	.then(async () => {
		app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
		// await mongoose.connection.db.dropDatabase();
		// KPI.insertMany(kpis);
		// Product.insertMany(products);
	})
	.catch((err) => console.log(`${err} did not connect`));
