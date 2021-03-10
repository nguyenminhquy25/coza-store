const { Router } = require("express");
const express = require("express");
const shopping_cart_controller = require("../controllers/shopping-cart.controller.js");
const router = express.Router();

router.get("/", shopping_cart_controller.index);

module.exports = router;