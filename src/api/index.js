const express = require("express");

const emojis = require("./emojis");
const users = require("./users/routes");

const router = express.Router();

router.get("/", (req, res) => {
  res.json({
    message: "API - 👋🌎🌍🌏",
  });
});

router.use("/emojis", emojis);
router.use("/users", users);

module.exports = router;
