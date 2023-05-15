const express = require("express");
const router = express.Router();
const authRouter = require("./auth.routes");
const postRouter = require("./post.routes");
const followRouter = require("./follow.routes");
const userRouter = require("./user.routes");
// 양식
router.use("/auth", [authRouter]);
router.use("/post", [postRouter]);
router.use("/follow", [followRouter]);
router.use("/user", [userRouter]);

module.exports = router;
