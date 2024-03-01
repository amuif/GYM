const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const excerciseSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    equipment: {
      type: String,
      required: false,
    },

    creator: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("excerciseModel", excerciseSchema);
