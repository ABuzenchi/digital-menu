interface SearchBarProps {
  query: string
  onSearch: (query: string) => void
}

const SearchBar = ({ query, onSearch }: SearchBarProps) => {
  return (
    <div className="mb-8 w-full md:w-1/3">
      <input
        type="text"
        value={query}
        onChange={(e) => onSearch(e.target.value)}
        placeholder="Search products by name..."
        className="w-full p-2 text-sm rounded-full border border-red-300 text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-500"
      />
    </div>
  )
}

export default SearchBar;
