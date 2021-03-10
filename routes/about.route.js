const express = require("express");
const about_controller = require("../controllers/about.controller.js");
const router = express.Router();

router.get("/", about_controller.index);

module.exports = router;