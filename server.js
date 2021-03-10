const express = require("express");
const bodyParser = require("body-parser");
const pug = require("pug");
const db =  require("./db");
const about_route = require("./routes/about.route.js");
const shop_route = require("./routes/shop.route.js");
const contact_route = require("./routes/contact.route.js");
const home_route = require("./routes/home.route.js");
const blog_route = require("./routes/blog.route.js");
const shopping_cart_route = require("./routes/shopping-cart.route.js");

const app = express();

app.set("view engine","pug");
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use("/", home_route);
app.use("/shop", shop_route);
app.use("/contact", contact_route);
app.use("/blog", blog_route);
app.use("/shopping-cart", shopping_cart_route);
app.use("/about", about_route);

app.listen(3000,() => {
    console.log("success");
});