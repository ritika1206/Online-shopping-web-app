const Product = require("../models/product");
const Cart = require("../models/cart");

exports.getHome = (req, res, next) => {
    console.log("welcome to the shop");
    res.render("shop/home", { pageTitle: "Home" });
}

exports.getProducts = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render("shop/products", { pageTitle: "Products", prods: products });
    });
}

exports.getProductDetail = (req, res, next) => {
    Product.fetchById(req.body.id, (product) => {
        res.render("shop/product-detail", { product: product, pageTitle: "Product Details" });
    });
}

exports.getCart = (req, res, next) => {
    Cart.getCart(cart => {
        res.render("admin/cart", {
            cart: cart,
            pageTitle: "Cart"
        });
    });
}

exports.postCart = (req, res, next) => {
    Cart.addProduct(req.body.id, req.body.price);
    res.redirect("/cart");
}

exports.getOrders = (req, res, next) => {
    res.render("shop/ordrers", { pageTitle: "Orders" });
}

exports.postOrders = (req, res, next) => {
    
}

exports.getCheckout = (req, res, next) => {
    escape.render("shop/checkout", { pageTitle: "Checkout" });
}

