const express = require("express");
const home_controller = require("../controllers/home.controller.js");
const router = express.Router();

router.get("/", home_controller.index);

module.exports = router;