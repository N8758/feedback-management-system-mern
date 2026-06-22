const analyzeSentiment = (text) => {
  const positiveWords = [
    "good",
    "great",
    "excellent",
    "awesome",
    "love",
    "amazing",
    "nice",
    "perfect",
  ];

  const negativeWords = [
    "bad",
    "poor",
    "hate",
    "issue",
    "bug",
    "problem",
    "terrible",
    "worst",
  ];

  const value = text.toLowerCase();

  let positive = 0;
  let negative = 0;

  positiveWords.forEach((word) => {
    if (value.includes(word)) {
      positive++;
    }
  });

  negativeWords.forEach((word) => {
    if (value.includes(word)) {
      negative++;
    }
  });

  if (positive > negative) {
    return "Positive";
  }

  if (negative > positive) {
    return "Negative";
  }

  return "Neutral";
};

module.exports = {
  analyzeSentiment,
};