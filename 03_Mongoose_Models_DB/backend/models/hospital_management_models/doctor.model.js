const { mongoose, Schema } = require("mongoose");

const doctorSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    salary: {
      type: String,
      required: true,
    },
    qualification: {
      type: String,
      required: true,
    },
    experienceInYears: {
      type: Number,
      default: 0,
    },
    worksInHospitals: [{ type: Schema.Types.ObjectId, ref: "Hospital" } ],
  },
  { timestamps: true },
);

const Doctor = mongoose.model("Doctor", doctorSchema);

module.exports = Doctor;
