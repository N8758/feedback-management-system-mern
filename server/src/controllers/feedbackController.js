const Feedback = require("../models/Feedback");

const createFeedback = async (req, res) => {
  try {
    const {
  category,
  comment,
  email,
} = req.body;

    if (!category || !comment) {
      return res.status(400).json({
        success: false,
        message: "Category and comment are required",
      });
    }

    const feedback = await Feedback.create({
      category,
      comment,
      email,
    });

    res.status(201).json({
      success: true,
      message: "Feedback submitted successfully",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};



const getFeedbacks = async (req, res) => {
  try {
    const {
      search = "",
      category = "",
      page = 1,
      limit = 10,
    } = req.query;

    const query = {};

    if (category) {
      query.category = category;
    }

    if (search) {
      query.$or = [
        {
          comment: {
            $regex: search,
            $options: "i",
          },
        },
        {
          email: {
            $regex: search,
            $options: "i",
          },
        },
      ];
    }

    const pageNumber = Number(page);
    const limitNumber = Number(limit);

    const feedbacks = await Feedback.find(query)
      .sort({ createdAt: -1 })
      .skip((pageNumber - 1) * limitNumber)
      .limit(limitNumber);

    const total =
      await Feedback.countDocuments(query);

    res.status(200).json({
      success: true,
      total,
      page: pageNumber,
      limit: limitNumber,
      totalPages: Math.ceil(
        total / limitNumber
      ),
      data: feedbacks,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};











const exportFeedbackCSV = async (
  req,
  res
) => {
  try {
    const feedbacks =
      await Feedback.find();

    let csv =
      "Category,Comment,Email,Status,Date\n";

    feedbacks.forEach(
      (item) => {
        csv += `"${item.category}","${item.comment}","${item.email || ""}","${item.status}","${item.createdAt}"\n`;
      }
    );

    res.header(
      "Content-Type",
      "text/csv"
    );

    res.attachment(
      "feedbacks.csv"
    );

    res.send(csv);
  } catch (error) {
    res.status(500).json({
      message:
        error.message,
    });
  }
};










const getFeedbackById = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    res.status(200).json({
      success: true,
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const deleteFeedback = async (req, res) => {
  try {
    const feedback = await Feedback.findById(req.params.id);

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message: "Feedback not found",
      });
    }

    await feedback.deleteOne();

    res.status(200).json({
      success: true,
      message: "Feedback deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const updateFeedbackStatus = async (
  req,
  res
) => {
  try {
    const { status } = req.body;

    const feedback =
      await Feedback.findById(
        req.params.id
      );

    if (!feedback) {
      return res.status(404).json({
        success: false,
        message:
          "Feedback not found",
      });
    }

    const statusOrder = {
      Open: 1,
      "In Progress": 2,
      Resolved: 3,
    };

    if (
      statusOrder[status] <
      statusOrder[
        feedback.status
      ]
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Cannot move status backwards",
      });
    }

    if (
      feedback.status ===
      "Resolved"
    ) {
      return res.status(400).json({
        success: false,
        message:
          "Resolved feedback cannot be changed",
      });
    }

    feedback.status = status;

    await feedback.save();

    res.status(200).json({
      success: true,
      message:
        "Status updated successfully",
      data: feedback,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message:
        error.message,
    });
  }
};



module.exports = {
  createFeedback,
  getFeedbacks,
  getFeedbackById,
  deleteFeedback,
  updateFeedbackStatus,
   exportFeedbackCSV,
};


