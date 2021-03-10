module.exports.index = (req, res) => {
    res.render("about", {
        page_name: "About"
    });
}