const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getAddProduct = (req, res, next) => {
    console.log("request is sent to display the product addition form");
    res.render("admin/edit-product", { pageTitle: "Add Product" });
    console.log("form is successfully displayed");
}

exports.postAddProducts = (req, res, next) => {
    const product = new Product(0, req.body.name, req.body.imageUrl, req.body.price);
    product.save();
    console.log("the product has been successfully added");
    res.redirect("/products");
}

exports.getAdminProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("admin/products", {
            products: products,
            pageTitle: "Admin Products"
        });
    });
}

exports.getEditProduct = (req, res, next) => {
    Product.fetchById(req.body.id, (product) => {
        res.render("/admin/edit-product", { product: product, pageTitle: "Edit Product"});
    });
}

exports.postEditProduct = (req, res, next) => {
    const product = req.body;
    product.save();
    res.redirect("/admin/products");
}

exports.postDeleteProduct = (req, res, next) => {
    Product.deleteById(req.body.id);
    res.redirect("/admin/products");
}