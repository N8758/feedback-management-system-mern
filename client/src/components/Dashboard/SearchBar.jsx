const SearchBar = ({
  search,
  setSearch,
}) => {
  return (
    <div className="dashboard-search-wrapper">
      <input
        type="text"
        placeholder="Search feedback..."
        className="dashboard-search-input"
        value={search}
        onChange={(e) =>
          setSearch(e.target.value)
        }
      />
    </div>
  );
};

export default SearchBar;