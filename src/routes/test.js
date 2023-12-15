const express = require("express");
const router = express.Router();
const testController = require("../app/controllers/TestController");

router.use("/:slug", testController.show);
router.use("/", testController.index);

module.exports = router;
