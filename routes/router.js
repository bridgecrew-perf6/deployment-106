const express = require("express");
const controller = require("../controllers/login");
const router = express.Router();

router.get("/hi",controller.hi);
module.exports = router;