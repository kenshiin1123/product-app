import express from "express";
const router = express.Router();
import {
  getProducts,
  createAProduct,
  getAProduct,
  updateAProduct,
  deleteAProduct,
} from "../controllers/product.controller.js";

router.get("/", getProducts);
router.post("/", createAProduct);
router.get("/:productID", getAProduct);
router.put("/:productID", updateAProduct);
router.delete("/:productID", deleteAProduct);

export default router;
