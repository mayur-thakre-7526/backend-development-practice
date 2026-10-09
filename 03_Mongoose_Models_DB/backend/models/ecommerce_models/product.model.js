const { mongoose, Schema } = require("mongoose");

const productSchema = new Schema(
  {
    description: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    productImage: {
      type: String,
    },
    price: {
      type: Number,
      default: 0,
    },
    stock: {
      type: Number,
      default: 0,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  { timestamps: true },
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
