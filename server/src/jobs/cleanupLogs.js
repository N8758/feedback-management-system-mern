const fs = require("fs");
const path = require("path");

const cleanupLogs = () => {
  const logsDir = path.join(__dirname, "../../logs");

  if (!fs.existsSync(logsDir)) {
    return;
  }

  const files = fs.readdirSync(logsDir);

  files.forEach((file) => {
    const filePath = path.join(logsDir, file);
    const stats = fs.statSync(filePath);

    const days =
      (Date.now() - stats.mtime.getTime()) /
      (1000 * 60 * 60 * 24);

    if (days > 7) {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    }
  });
};

module.exports = cleanupLogs;