const FilterBar = ({
  category,
  setCategory,
}) => {
  return (
    <div className="dashboard-filter-wrapper">
      <select
        className="dashboard-filter-select"
        value={category}
        onChange={(e) =>
          setCategory(e.target.value)
        }
      >
        <option value="">
          All Categories
        </option>

        <option value="Bug">
          Bug
        </option>

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

export default FilterBar;