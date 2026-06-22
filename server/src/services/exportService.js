const { createObjectCsvStringifier } = require("csv-writer");

const exportFeedbackCSV = (feedbacks) => {
  const csvStringifier = createObjectCsvStringifier({
    header: [
      {
        id: "category",
        title: "Category",
      },
      {
        id: "comment",
        title: "Comment",
      },
      {
        id: "createdAt",
        title: "Created At",
      },
    ],
  });

  const header = csvStringifier.getHeaderString();
  const records = csvStringifier.stringifyRecords(feedbacks);

  return header + records;
};

module.exports = {
  exportFeedbackCSV,
};