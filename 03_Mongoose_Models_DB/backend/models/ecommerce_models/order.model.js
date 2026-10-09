const { mongoose, Schema } = require("mongoose");

const orderItemSchema = new Schema({
  productId: {
    type: Schema.Types.ObjectId,
    ref: "Product",
  },
  quantity: {
    type: Number,
    required: true,
  },
});

const orderSchema = new Schema(
  {
    orderPrice: {
      type: Number,
      required: true,
    },
    customer: {
      type: Schema.type.ObjectId,
      ref: "User",
    },
    orderItems: {
      type: [orderItemSchema],
    },
    address: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      enum: ["PENDING", "CANCELLED", "DELIVERED"],
      default: "PENDING",
    },
  },
  { timestamps: true },
);

const Order = mongoose.model("Order", orderSchema);

module.exports = Order;
