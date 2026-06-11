const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const product = require("../models/productModel");

exports.createProducts = async (req, res, next) => {
  try {
    const { name, email, productName, price, description } = req.body;

    if (!name || !email || !productName || !price || !description) {
      return res.status(400).json({
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

    res.status(201).json({
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

