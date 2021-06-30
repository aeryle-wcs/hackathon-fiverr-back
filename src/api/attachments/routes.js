const express = require("express");
const middlewares = require("./../../middlewares");

const router = express.Router();

const getAll = require("./controllers/getAll");
const getOne = require("./controllers/getOne");
const post = require("./controllers/post");
const deleteAttachments = require("./controllers/deleteAttachments");
const getOneAttFromOneUser = require("./controllers/getOneAttFromOneUser");

router.get("/", getAll);
router.get("/:id", getOne);
router.get("/:id/:userID", getOneAttFromOneUser);
router.post("/", post);
router.delete("/:id", deleteAttachments);

module.exports = router;
