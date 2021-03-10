const db = require("../db");
module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Shop",
        page_category: "All Products"
    });
}
module.exports.men = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").filter({category: "Men"}).slice((page - 1) * numberOfItem, page * numberOfItem).value(), 
        page: page,
        page_name: "Shop",
        page_category: "Men"
    });
}
module.exports.women = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").filter({category: "Women"}).slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Shop",
        page_category: "Women"
    });
}
module.exports.shoes = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").filter({category: "Shoes"}).slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Shop",
        page_category: "Shoes"
    });
}
module.exports.bag = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").filter({category: "Bag"}).slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Shop",
        page_category: "Bag"
    });
}
module.exports.watches = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("shop", {
        products: db.get("products").filter({category: "Watches"}).slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Shop",
        page_category: "Watches"
    });
}
module.exports.product_detail = (req, res) => {
    res.render("product-detail", {
        product: db.get("products").find({product_alt: req.query.product}).value()
    });
}