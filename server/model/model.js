const mongoose = require("mongoose");

const dataSchema = new mongoose.Schema({
  task: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model("Tasks", dataSchema);
