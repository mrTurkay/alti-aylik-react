const SearchInput = ({ onSearchTermChanged, searchTerm }) => {
  return (
    <div className="searchInputWrapper">
      <span className="searchInputText">Search Item</span>
      <input
        className="searchInput"
        type="text"
        placeholder="Apple Watch, Samsung S21, Macbook Pro, ..."
        value={searchTerm}
        onChange={(e) => onSearchTermChanged(e.target.value)}
      />
    </div>
  );
};

export default SearchInput;
