import React from "react";
import SearchArea from "./SearchAreaComponent";
import ResultsArea from "./ResultsAreaComponent";

const LandingPage = (props) => {
  return (
    <>
      <SearchArea searchString={props.searchString} setSearchString={props.setSearchString} regionFilter={props.regionFilter} setRegionFilter={props.setRegionFilter} />
      <ResultsArea 
              countries={props.regionFilter === "All" ? 
                props.resultsList.filter((country) => country.name.toLowerCase().includes(props.searchString.toLowerCase())) 
                : props.resultsList.filter((country) => country.continent === props.regionFilter).filter((country) => country.name.toLowerCase().includes(props.searchString.toLowerCase()))} activeCountry={props.activeCountry} setActiveCountry={props.setActiveCountry} 
        />;
    </>
  );
};


export default LandingPage;