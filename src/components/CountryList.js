import React from "react";
import { useSelector } from "react-redux";
import CountryCard from "./CountryCard";

const CountryList = () => {
  const { countries, loading, error } = useSelector((state) => state.countries);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {countries.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
