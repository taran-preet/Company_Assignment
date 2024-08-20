import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "../redux/slices/countriesSlice";

const CountrySearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();

  const handleSearch = () => {
    if (query.trim()) {
      dispatch(fetchCountries(query));
    }
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for a country..."
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
};

export default CountrySearch;
