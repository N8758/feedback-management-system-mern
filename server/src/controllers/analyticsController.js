const {
  getAnalyticsData,
} = require("../services/analyticsService");

const getAnalytics = async (
  req,
  res
) => {
  try {
    const data =
      await getAnalyticsData();

    res.status(200).json({
      success: true,
      data,
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
  getAnalytics,
};