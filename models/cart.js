const fs = require("fs");
const path = require("path");

const p = path.join(
    path.dirname(process.mainModule.filename),
    'data',
    'cart.json'
  );

module.exports = class Cart {
    static getCart(cb) {
        fs.readFile(p, (err, fileContent) => {
            if(err){
                cb([]);
            } else {
                cb(JSON.parse(fileContent));
            }
        });
    }

    static addProduct(id, productPrice) {
        let cart = { products: [], totalPrice: 0 };
        // fetching the cart
        fs.readFile(p, (err, fileContent) => {
            if(!err){
                cart = JSON.parse(fileContent);
            }
            const existingProductIndex = cart.products.findIndex(prod => { prod.id === id });
            const existingProduct = cart.products[existingProductIndex];
            // const updatedProduct;
            // adding or increasing qty
            if(existingProduct){
                existingProduct.qty = existingProduct.qty + 1;
                // updatedProduct = {...existingProduct};
                cart.products[existingProductIndex] = existingProduct;
            } else {
                const product = { id: id, qty: 1 }
                cart.products.push(product);
            }
            cart.totalPrice += +productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }

    static deleteProduct(id, productPrice) {
        fs.readFile(p, (err, fileContent) => {
            if(err){
                return;
            }
            cart = {...JSON.parse(fileContent)};
            const product = cart.products.find(prod => {prod.id === id});
            if(!product){
                return;
            }
            cart.products = cart.products.filter(prod => {prod.id !== id});
            cart.totalPrice -= product.qty*productPrice;
            fs.writeFile(p, JSON.stringify(cart), err => {
                console.log(err);
            });
        });
    }
}