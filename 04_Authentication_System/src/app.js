const express = require("express");
const authRoutes = require("./routes/auth.routes.js");
const cookieParser = require("cookie-parser");
const createPosts = require("./routes/posts.routes.js");

const app = express();
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/posts", createPosts);

module.exports = app;
