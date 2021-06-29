const express = require("express");

const emojis = require("./emojis");
const users = require("./users/routes");
const attachments = require("./attachments/routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/users", users);
router.use("/attachments", attachments);

module.exports = router;
