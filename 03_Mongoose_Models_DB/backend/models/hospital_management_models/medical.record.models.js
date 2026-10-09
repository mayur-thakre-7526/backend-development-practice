const { mongoose, Schema } = require("mongoose");

const medicalRecordSchema = new Schema({}, { timestamps: true });

const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema);

module.exports = MedicalRecord;
