const SearchItem = ({ search, setSearch }) => {
  return (
    <form className="searchForm" onSubmit={(e) => e.preventDefault()}>
        <input
         type="text"
         role="searchItem"
         aria-label="searchItem"
         value={search}
         onChange={(e) => setSearch(e.target.value)}
          />
        <label htmlFor="searchItem">Search</label>
    </form>
  )
}

export default SearchItem
