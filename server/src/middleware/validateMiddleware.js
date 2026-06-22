const validateFeedback = (
  req,
  res,
  next
) => {
  const { category, comment } = req.body;

  if (!category || !comment) {
    return res.status(400).json({
      success: false,
      message:
        "Category and comment are required",
    });
  }

  next();
};

module.exports = {
  validateFeedback,
};