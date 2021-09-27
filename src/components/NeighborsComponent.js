import React from "react";
import { Link } from "react-router-dom";

const Neighbors = ({country, resultsList, setActiveCountry}) => {
  const neighbors = resultsList.filter((result) => {
    if (country.borders) {
      return country.borders.includes(result.alpha3Code);
    }
    return;
  });

  const neighborLinks = neighbors.map((neighbor) => {
    return (
      <Link to={`/countries/${neighbor.alpha3Code}`} onClick={() => setActiveCountry(neighbor)} key={neighbor.alpha3Code}>
        <li>{neighbor.name}</li>
      </Link>
    );
  });

  return neighborLinks;
};

export default Neighbors
