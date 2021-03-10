const express = require("express");
const shop_controller = require("../controllers/shop.controller.js");
const router = express.Router();

router.get("/", shop_controller.index);
router.get("/men", shop_controller.men);
router.get("/women", shop_controller.women);
router.get("/bag", shop_controller.bag);
router.get("/shoes", shop_controller.shoes);
router.get("/watches", shop_controller.watches);
router.get("/product-detail", shop_controller.product_detail);

module.exports = router;