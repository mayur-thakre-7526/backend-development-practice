const { mongoose, Schema } = require("mongoose");

const patientSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    diagonsedWith: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    bloodGroup: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      enum: ["M", "F", "O"],
      required: true,
    },
    admittedIn: {
      type: Schema.Types.ObjectId,
      ref: "Hospital",
    },
  },
  { timestamps: true },
);

const Patient = mongoose.model("Patient", patientSchema);

module.exports = Patient;
