import React from "react";
import { useDispatch } from "react-redux";
import { fetchCountryDetail } from "../redux/slices/countriesSlice";

const CountryCard = ({ country }) => {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(fetchCountryDetail(country.cca3));
  };

  return (
    <div onClick={handleClick}>
      <h2>{country.name.common}</h2>
      <img
        src={country.flags.svg}
        alt={`Flag of ${country.name.common}`}
        width="50"
      />
      <p>Population: {country.population}</p>
    </div>
  );
};

export default CountryCard;
