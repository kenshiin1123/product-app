import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};

export const createAProduct = async (req, res) => {
  const product = req.body;

  if (!product.name || !product.price || !product.image)
    return res
      .status(404)
      .json({ success: false, message: "Please provide all fields" });

  const newProduct = new Product({
    name: product.name,
    price: product.price,
    image: product.image,
  });

  try {
    await newProduct.save();
    res.status(201).json({ success: true, data: newProduct });
  } catch (error) {
    console.error("Error in Create Product: ", error.message);
    res.status(500).json({ success: false, message: `Server Error: ${error}` });
  }
};

export const getAProduct = async (req, res) => {
  const id = req.params.productID;
  try {
    const product = await Product.findById(id);
    res.status(200).json({ success: true, data: product });
  } catch (error) {
    res.status(404).json({ success: false, message: "Product not found" });
  }
};

export const updateAProduct = async (req, res) => {
  const newProductInfo = req.body;
  try {
    const id = req.params.productID;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { ...newProductInfo },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res
        .status(404)
        .json({ success: false, message: "Product not found" });
    }

    res.status(200).json({
      success: true,
      message: "Product successfully updated",
      data: updatedProduct,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const deleteAProduct = async (req, res) => {
  const id = req.params.productID;
  try {
    await Product.findByIdAndDelete(id);
    res.status(200).json({ success: true, message: "Product Deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Server Error" });
  }
};
