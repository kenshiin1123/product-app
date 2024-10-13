import express from "express";
import connectDB from "./config/db.js";
import dotenv from "dotenv";
import productRoutes from "./routes/product.routes.js";
import path from "path";
// import { seedDB } from "./seeds/seeds.js";
// seedDB();

dotenv.config();
const app = express();
const __dirname = path.resolve();
app.use(express.json());

app.use("/api/products", productRoutes);
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/frontend/dist")));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "dist", "index.html"));
  });
}

app.listen(process.env.PORT, () => {
  connectDB();
  console.log("Listening to port", process.env.PORT);
});
