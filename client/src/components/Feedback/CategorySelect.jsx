import React from "react";

const CategorySelect = ({
  value,
  onChange,
}) => {
  return (
    <div className="feedback-category-wrapper">
      <label className="feedback-label">
        Category
      </label>

      <select
        className="feedback-category-select"
        value={value}
        onChange={onChange}
      >
        <option value="">
          Select Category
        </option>
        <option value="Bug">Bug</option>
        <option value="Suggestion">
          Suggestion
        </option>
        <option value="Complaint">
          Complaint
        </option>
        <option value="Feature Request">
          Feature Request
        </option>
      </select>
    </div>
  );
};

export default CategorySelect;