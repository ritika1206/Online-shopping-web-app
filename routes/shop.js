const express = require("express");
const router = express.Router();
const path = require("path");
const shopController = require("../controllers/shop");

router.get("/", shopController.getHome);

router.get("/shop/products", shopController.getProducts);

router.get("/products/:productId", shopController.getProductDetail);

router.get('/admin/cart', shopController.getCart);

router.post("/admin/cart", shopController.postCart);

router.get("/admin/orders", shopController.getOrders);

router.post("/admin/orders", shopController.postOrders);

router.get("/checkout", shopController.getCheckout);


module.exports = router;