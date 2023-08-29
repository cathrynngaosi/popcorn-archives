import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchBar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;

    navigate(`/search/${query}`);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Search for a movie or series title"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="w-full rounded-lg px-6 py-4 placeholder:italic focus:outline-none"
      />
    </form>
  );
}

export default SearchBar;
