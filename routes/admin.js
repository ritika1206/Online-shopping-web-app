const express = require("express");
const router = express.Router();
const path = require("path");
const adminController = require("../controllers/admin");

router.get("/admin/add-product", adminController.getAddProduct);

router.post("/admin/add-product", adminController.postAddProducts);

router.get("/admin/edit-product", adminController.getEditProduct);

router.post("/admin/edit-product", adminController.postEditProduct);

router.post("/admin/delete-product", adminController.postDeleteProduct);

router.get("/admin/products", adminController.getAdminProducts);

module.exports = router;