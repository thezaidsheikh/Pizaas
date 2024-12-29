import { useState } from "react";
import { useNavigate } from "react-router";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  function onSubmit(e) {
    e.preventDefault();
    if (!query) return;
    console.log(query);
    navigate(`/order/${query}`);
    setQuery("");
  }
  return (
    <form onSubmit={onSubmit}>
      <input type="text" placeholder="Search order #" value={query} onChange={(e) => setQuery(e.target.value)} />
      <button>Search</button>
    </form>
  );
}

export default SearchOrder;
