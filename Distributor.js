const mongoose = require("mongoose");

const DistributorSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  // Thêm các thông tin khác nếu cần
});

const DistributorModel = mongoose.model("distributor", DistributorSchema);
