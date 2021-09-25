import React from "react";
import { Link } from "react-router-dom";

const ResultsArea = (props) => {
  const countryCards = props.countries.map((country) => {
    return (
      <Link to={`/countries/${country.alpha3Code}`} key={country.alpha3Code}>
        <div
          className="country-card"
          onClick={() => {
            props.setActiveCountry(country);
          }}
        >
          <div className="flag-div-sm" style={{ backgroundImage: `url(${country.flags[0]})`, backgroundPosition: "center", backgroundSize: "cover" }} />

          <div className="card-content-div">
            <h3 className="country-card-heading">{country.name}</h3>
            <p>
              <span className="data-label">Population:</span> {country.population}
            </p>
            <p>
              <span className="data-label">Region:</span> {country.continent}
            </p>
            <p>
              <span className="data-label">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      </Link>
    );
  });

  return (
    <>
      <section id="results-section">
        <div id="results-display-div">{countryCards}</div>
      </section>
    </>
  );
};

export default ResultsArea;
