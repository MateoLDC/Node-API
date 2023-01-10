const mongoose = require("mongoose");

const LanguagesModel = mongoose.model(
  "SnipApp",
  {
    name: {
      type: String,
      required: true,
    },
    slug: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
  "Languages"
);

module.exports = { LanguagesModel };
