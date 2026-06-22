const { body } = require(
  "express-validator"
);

const feedbackValidation = [
  body("category")
    .trim()
    .notEmpty()
    .withMessage(
      "Category is required"
    )
    .isIn([
      "Bug",
      "Suggestion",
      "Complaint",
      "Feature Request",
    ])
    .withMessage(
      "Invalid category"
    ),

  body("comment")
    .trim()
    .notEmpty()
    .withMessage(
      "Comment is required"
    )
    .isLength({
      min: 5,
      max: 500,
    })
    .withMessage(
      "Comment must be between 5 and 500 characters"
    ),

  body("email")
    .optional({
      checkFalsy: true,
    })
    .trim()
    .isEmail()
    .withMessage(
      "Invalid email address"
    ),
];

module.exports = {
  feedbackValidation,
};