const express = require("express");
const middlewares = require("./../../middlewares");

const router = express.Router();

const getAll = require("./controllers/getAll");
const getOne = require("./controllers/getOne");

router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
