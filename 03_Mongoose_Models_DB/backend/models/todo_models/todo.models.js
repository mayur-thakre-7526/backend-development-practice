const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    complete: {
      type: Boolean,
      defaule: false,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    subTodoes: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "SubTodo",
      },
    ], // Array of subtodoes
  },
  { timestamps: true },
);

const Todo = mongoose.model("Todo", todoSchema);

module.exports = Todo;
