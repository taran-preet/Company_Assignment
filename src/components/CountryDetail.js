import React from "react";
import { useSelector } from "react-redux";

const CountryDetail = () => {
  const { selectedCountry, loading, error } = useSelector(
    (state) => state.countries
  );

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  if (!selectedCountry) return null;

  return (
    <div>
      <h2>{selectedCountry.name.common}</h2>
      <p>Capital: {selectedCountry.capital}</p>
      <p>Region: {selectedCountry.region}</p>
      <p>Subregion: {selectedCountry.subregion}</p>
      <p>Languages: {Object.values(selectedCountry.languages).join(", ")}</p>
    </div>
  );
};

export default CountryDetail;
