const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const path = require("path");

app.use(bodyParser.urlencoded({extended: false})); 
app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "ejs");
app.set("views", "views");

app.use(adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    res.render("404", { pageTitle: "Page not found" });
});

app.listen("3000", () => {
    console.log("the server is running");
});