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
        <div id="results-header">
          <h2>{props.region === "All" ? "All Countries" : props.region}</h2>
        </div>
        <div id="results-display-div">{countryCards}</div>
      </section>
    </>
  );
};

export default ResultsArea;
