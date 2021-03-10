const db = require("../db");
module.exports.index = (req, res) => {
    var page = parseInt(req.query.page) || 1;
    var numberOfItem = 16;
    res.render("home", {
        products: db.get("products").slice((page - 1) * numberOfItem, page * numberOfItem).value(),
        page: page,
        page_name: "Home",
        page_category: "All Products"
    });
}