const mongoose = require("mongoose");

const CountrySchema = new mongoose.Schema(
  {
    name: { type: String },
    arabicName: { type: String },
    phoneCode: { type: String },
    timeZone: { type: String },
    flag: { type: String },
    active: { type: Boolean, default: true },
  },
  {
    timestamps: true,
  }
);

exports.Country = mongoose.model("Country", CountrySchema);
