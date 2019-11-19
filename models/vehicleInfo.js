const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vehicleInfoSchema = new Schema({
  make: { type: String, required: true },
  model: { type: String, required: true },
  year: {type: Number, required: true},
  rating: { type: Number, default: 5 }
});

const VehicleInfo = mongoose.model("VehicleInfo", vehicleInfoSchema);

module.exports = VehicleInfo;
