const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const product = require("../models/productModel");

exports.createProducts = async (req, res, next) => {
  try {
    const { name, email, productName, price, description } = req.body;

    if (!name || !email || !productName || !price || !description) {
      return res.status(404).json({
        success: false,
        message: "All fields are required",
      });
    }

    // Here you would typically save the product to the database
    const newProduct = new product({
      buyerName: name,
      buyerEmail: email,
      productName: productName,
      price: price,
      description: description,
    });

    const savedProduct = await newProduct.save();

    res.status(200).json({
      success: true,
      message: "Product created successfully",
      data: savedProduct,
    });
  } 

  catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
  
};

exports.allProducts = async (req, res, next) => {

  try {
    const products = await product.find();
    
    if (products.length === 0) {
      return res.status(404).json({
        success: false,
        message: "No products found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Products retrieved successfully",
      data: products,
    });
  }
  catch(error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }

  
}

exports. singleProduct = async (req, res, next) => {
  try {
    const {id} = req.params;
    const singleProduct = await product.findById(id);

    if (!singleProduct) {
      return res.status(404).json({
        success: false,
        message: "Product not found",
      });
     
    }

     res.status(200).json({
        success: true,
        message: "Product retrieved successfully",
        data: singleProduct,
      });
  }
  catch(error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}