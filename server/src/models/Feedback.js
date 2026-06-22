const mongoose = require("mongoose");

const feedbackSchema = new mongoose.Schema(
  {
    category: {
      type: String,
      required: true,
      enum: [
        "Bug",
        "Suggestion",
        "Complaint",
        "Feature Request",
      ],
    },

    comment: {
      type: String,
      required: true,
      trim: true,
      maxlength: 500,
    },

    email: {
      type: String,
      trim: true,
      default: "",
    },

    status: {
      type: String,
      enum: [
        "Open",
        "In Progress",
        "Resolved",
      ],
      default: "Open",
    },

    sentiment: {
      type: String,
      enum: [
        "Positive",
        "Negative",
        "Neutral",
      ],
      default: "Neutral",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "Feedback",
  feedbackSchema
);