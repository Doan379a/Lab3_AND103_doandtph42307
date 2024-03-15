const mongoose = require("mongoose");

const SanphamSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  price: {
    type: Number,
    required: true,
  },

  quantily: {
    type: Number,
    required: true,
  },

  status: {
    type: Boolean,
  },
});

const SanphamModel = mongoose.model("sanpham", SanphamSchema);

module.exports = SanphamModel;
