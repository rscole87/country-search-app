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
  const API_KEY = '9efaa6cf6d8ca50bbad1c400a5309e99'

  useEffect(() => {
    fetch(`http://api.countrylayer.com/v2/all?access_key=${API_KEY}`)
      .then((results) => results.json())
      .then((results) => {
        console.log(results)
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
            <CountryProfile country={activeCountry} setActiveCountry={setActiveCountry} resultsList={resultsList} /> }
        />
        <Redirect to="/" />
      </Switch>
    </>
  );
};

export default Main;
