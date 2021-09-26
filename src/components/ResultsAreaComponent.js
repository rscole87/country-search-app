import React from "react";
import CountryCard from "./CountryCardComponent";

const ResultsArea = (props) => {
  const countryCards = props.countries.map((country) => {
    return (
      <CountryCard country={country} setActiveCountry={props.setActiveCountry}/>
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
