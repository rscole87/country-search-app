import React, { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import SearchArea from "./SearchAreaComponent";
import ResultsArea from "./ResultsAreaComponent";

const Main = () => {
  const [searchString, setSearchString] = useState("");
  const [regionFilter, setRegionFilter] = useState("All");
  const [resultsList, setResultsList] = useState([]);
  const [activeCountry, setActiveCountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v2/all")
      .then((results) => results.json())
      .then((results) => {
        setResultsList(results);
      })
      .catch((err) => console.log(`Error occured: ${err}`));
  }, []);

  return (
    <>
      <Header />
      <SearchArea searchString={searchString} setSearchString={setSearchString} setRegionFilter={setRegionFilter} />
      <ResultsArea 
        countries={
          regionFilter === "All" ? 
          resultsList.filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()))
          : resultsList.filter(country => country.continent === regionFilter).filter(country => country.name.toLowerCase().includes(searchString.toLowerCase()))
          } 
        activeCountry={activeCountry}
        setActiveCountry={setActiveCountry}
      />
    </>
  );
};

export default Main;
