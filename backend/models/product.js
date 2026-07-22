const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  productName: String,
  sku: String,
  category: String,
  unitPrice: Number,
  currentStock: Number,
  minimumStock: Number,
  warehouse: String
});

module.exports = mongoose.model("Product", productSchema);