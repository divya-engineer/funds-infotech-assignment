const mongoose = require("mongoose");

const challanSchema = new mongoose.Schema({
  challanNumber: String,
  customer: String,
  products: [
    {
      productId: String,
      productName: String,
      quantity: Number,
      price: Number
    }
  ],
  totalQuantity: Number,
  status: String,
  createdDate: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Challan", challanSchema);