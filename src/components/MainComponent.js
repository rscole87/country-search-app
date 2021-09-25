import React, { useState, useEffect } from "react";
import Header from "./HeaderComponent";
import LandingPage from "./LandingPageComponent";
import CountryProfile from "./CountryProfileComponent";
import { Switch, Route, Redirect } from "react-router-dom";

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
      <hr />
      <Switch>
        <Route exact path="/" render={() => <LandingPage searchString={searchString} setSearchString={setSearchString} regionFilter={regionFilter} setRegionFilter={setRegionFilter} resultsList={resultsList} setActiveCountry={setActiveCountry} />} />
        <Route
          path="/countries/:countryId"
          render={() =>
            <CountryProfile country={activeCountry} setActiveCountry={setActiveCountry} /> }
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
