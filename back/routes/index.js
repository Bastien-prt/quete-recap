const express = require("express");
const router = express.Router();
const authRouter = require("./auth/auth");

router.get("/", (req, res) => {
  res.send("youhou2");
});

router.use("/auth", authRouter);

module.exports = router;