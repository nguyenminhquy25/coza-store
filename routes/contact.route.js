const express = require("express");
const contact_controller = require("../controllers/contact.controller.js");
const router = express.Router();

router.get("/", contact_controller.index);

module.exports = router;