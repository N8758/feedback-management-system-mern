

import React from "react";

const FeedbackCard = ({
  category,
  comment,
  createdAt,
}) => {
  return (
    <div className="feedback-card">
      <div className="feedback-card-header">
        <span className="feedback-card-category">
          {category}
        </span>

        <span className="feedback-card-date">
          {new Date(
            createdAt
          ).toLocaleDateString()}
        </span>
      </div>

      <p className="feedback-card-comment">
        {comment}
      </p>
    </div>
  );
};

export default FeedbackCard;