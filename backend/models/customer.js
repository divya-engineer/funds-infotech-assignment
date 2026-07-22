const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
  customerName: String,
  mobile: String,
  email: String,
  businessName: String,
  gstNumber: String,
  customerType: String,
  address: String,
  status: String,
  followUpDate: String,
  notes: String
});

module.exports = mongoose.model("Customer", customerSchema);