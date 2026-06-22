const Feedback = require(
  "../models/Feedback"
);

const getAnalyticsData =
  async () => {
    const totalFeedback =
      await Feedback.countDocuments();

    const categoryDistribution =
      await Feedback.aggregate([
        {
          $group: {
            _id: "$category",
            count: {
              $sum: 1,
            },
          },
        },
      ]);

    const recentFeedback =
      await Feedback.find()
        .sort({
          createdAt: -1,
        })
        .limit(5);

    const openCount =
      await Feedback.countDocuments({
        status: "Open",
      });

    const inProgressCount =
      await Feedback.countDocuments({
        status: "In Progress",
      });

    const resolvedCount =
      await Feedback.countDocuments({
        status: "Resolved",
      });

    const thirtyDaysAgo =
      new Date();

    thirtyDaysAgo.setDate(
      thirtyDaysAgo.getDate() - 30
    );

    const last30DaysFeedback =
      await Feedback.countDocuments({
        createdAt: {
          $gte: thirtyDaysAgo,
        },
      });

    const feedbackTrend =
      await Feedback.aggregate([
        {
          $match: {
            createdAt: {
              $gte:
                thirtyDaysAgo,
            },
          },
        },
        {
          $group: {
            _id: {
              $dateToString: {
                format:
                  "%Y-%m-%d",
                date:
                  "$createdAt",
              },
            },
            count: {
              $sum: 1,
            },
          },
        },
        {
          $sort: {
            _id: 1,
          },
        },
      ]);

    const todayNotifications =
      await Feedback.find({
        createdAt: {
          $gte: new Date(
            new Date().setHours(
              0,
              0,
              0,
              0
            )
          ),
        },
      })
        .sort({
          createdAt: -1,
        })
        .limit(5);

    return {
      totalFeedback,
      categoryDistribution,
      recentFeedback,
      openCount,
      inProgressCount,
      resolvedCount,
      last30DaysFeedback,
      feedbackTrend,
      todayNotifications,
    };
  };

module.exports = {
  getAnalyticsData,
};