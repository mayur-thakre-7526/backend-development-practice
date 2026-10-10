const mongoose = require("mongoose");

async function connectDB() {
  await mongoose.connect(process.env.DB_URI);

  console.log("DB connected successfully");
}

module.exports = connectDB;
