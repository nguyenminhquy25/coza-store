const express = require("express");
const blog_controller = require("../controllers/blog.controller.js");
const router = express.Router();

router.get("/", blog_controller.index);
router.get("/blog-detail", blog_controller.blog_detail);
module.exports = router;