import React, {
  useState,
} from "react";
import CategorySelect from "./CategorySelect";
import {
  submitFeedback,
} from "../../services/feedbackService";

const FeedbackForm = () => {
  const [category, setCategory] =
    useState("");

  const [comment, setComment] =
    useState("");

  const [email, setEmail] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      await submitFeedback({
        category,
        comment,
        email,
      });

      alert(
        "Feedback submitted successfully."
      );

      setCategory("");
      setComment("");
      setEmail("");
    } catch (error) {
      alert(
        error?.response?.data
          ?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="feedback-form-page">
      <div className="feedback-form-card">
        <h1 className="feedback-form-title">
          We value your feedback
        </h1>

        <p className="feedback-form-subtitle">
          Help us improve by
          sharing your
          experience.
        </p>

        <form
          onSubmit={handleSubmit}
          className="feedback-main-form"
        >
          <CategorySelect
            value={category}
            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          />

          <div className="feedback-comment-wrapper">
            <label className="feedback-label">
              Your Feedback
            </label>

            <textarea
              className="feedback-comment-input"
              placeholder="Share your thoughts, suggestions, or issues..."
              value={comment}
              onChange={(e) =>
                setComment(
                  e.target.value
                )
              }
            />
          </div>

          <div className="feedback-email-wrapper">
            <label className="feedback-label">
              Your Email
              (Optional)
            </label>

            <input
              type="email"
              className="feedback-email-input"
              placeholder="you@example.com"
              value={email}
              onChange={(e) =>
                setEmail(
                  e.target.value
                )
              }
            />

            <p className="feedback-email-text">
              We'll never share
              your email.
            </p>
          </div>

          <button
            className="feedback-submit-btn"
            disabled={loading}
          >
            {loading
              ? "Submitting..."
              : "Submit Feedback"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackForm;