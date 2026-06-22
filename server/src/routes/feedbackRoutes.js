const express = require("express");

const {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  deleteFeedback,
  updateFeedbackStatus,
  exportFeedbackCSV,
} = require("../controllers/feedbackController");

const router = express.Router();

router.post("/", createFeedback);

router.get("/", getFeedbacks);

router.get(
  "/export/csv",
  exportFeedbackCSV
);

router.get("/:id", getFeedbackById);

router.delete("/:id", deleteFeedback);

router.patch(
  "/:id/status",
  updateFeedbackStatus
);

module.exports = router;