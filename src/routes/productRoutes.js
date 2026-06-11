const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const upload = require("../middlewares/upload");

router.post("/createproducts", upload.single("image"), productController.createProducts);
router.get("/allproducts", productController.allProducts);
router.get("/singleproduct/:id", productController.singleProduct);


module.exports = router;
