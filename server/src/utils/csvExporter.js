const {
  createObjectCsvStringifier,
} = require("csv-writer");

const generateCSV = (data) => {
  const csvStringifier =
    createObjectCsvStringifier({
      header: [
        {
          id: "category",
          title: "CATEGORY",
        },
        {
          id: "comment",
          title: "COMMENT",
        },
        {
          id: "createdAt",
          title: "CREATED_AT",
        },
      ],
    });

  const header =
    csvStringifier.getHeaderString();

  const records =
    csvStringifier.stringifyRecords(data);

  return header + records;
};

module.exports = generateCSV;