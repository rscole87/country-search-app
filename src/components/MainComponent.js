import React, { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import SearchArea from "./SearchAreaComponent";
import ResultsArea from "./ResultsAreaComponent";

const Main = () => {
  const [searchString, setSearchString] = useState("");
  const [regionFilter, setRegionFilter] = useState(null);
  const [resultsList, setResultsList] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((results) => results.json())
      .then((results) => {
        console.log(results);
        setResultsList(results);
      })
      .catch((err) => console.log(`Error occured: ${err}`));
  }, []);

  return (
    <>
      <Header />
      <SearchArea searchString={searchString} setSearchString={setSearchString} setRegionFilter={setRegionFilter} />
      <ResultsArea countries={resultsList.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()))} regionFilter={regionFilter} />
    </>
  );
};

export default Main;
