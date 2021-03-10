module.exports.index = (req, res) => {
    res.render("shopping-cart", {
        page_name: "Shopping cart"
    });
}