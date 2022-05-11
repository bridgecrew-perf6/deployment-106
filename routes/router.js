const express = require("express");
const controller = require("../controllers/login");
const router = express.Router();
const pool =

router.get("/hi",controller.hi);
module.exports = router;