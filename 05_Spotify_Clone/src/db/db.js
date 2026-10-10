const mongoose = require("mongoose");

async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("DB Connected");
  } catch (e) {
    console.log("Something went wrong :", e);
  }
}

module.exports = connectDB;
