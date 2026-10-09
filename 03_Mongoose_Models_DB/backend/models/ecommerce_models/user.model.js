const { mongoose, Schema } = require("mongoose");

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    password: {
        type: String, 
        required: true,
    }
  },
  { timestamps: true },
);

const User = mongoose.model("User", userSchema);

module.exports = User;
