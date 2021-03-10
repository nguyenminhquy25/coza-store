const db = require("../db");
module.exports.index = (req, res) => {
    res.render("blog", {
        blogs: db.get("blogs").value(),
        page_name: "Blog"
    });
}
module.exports.blog_detail = (req, res) => {
    res.render("blog-detail", {
        blog: db.get("blogs").find({ blog_alt: req.query.blog}).value()
    });
}