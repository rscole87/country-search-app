import React from "react";
import { Link } from "react-router-dom";
import Neighbors from "./NeighborsComponent";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./MapComponent";

const CountryProfile = ({ country, setActiveCountry, resultsList }) => {
  console.log(country);

  let currencies;
  if (country.currencies) {
    currencies = country.currencies.map((currency) => currency.name).join(", ");
  } else {
    currencies = ["None"];
  }

  const languages = country.languages.map((language) => language.name).join(", ");

  return (
    <>
      <section id="country-profile-section">
        <div className="container">
          <div>
            <Link to="/">
              <button className="back-bttn" onClick={() => setActiveCountry(null)}>
                <i className="fa fa-long-arrow-left" />
                {` `} Back
              </button>
            </Link>
          </div>

          <div className="profile-content">
            <div className="profile-flag-div">
              <img src={country.flag} alt={`${country.name} Flag`} />
            </div>

            <div className="profile-text-div">
              <div className="profile-header-div">
                <h2>{country.name}</h2>
              </div>

              <div className="profile-stats-div">
                <div>
                  <p>
                    <span className="data-label">Native Name: </span> {country.nativeName}
                  </p>
                  <p>
                    <span className="data-label">Population: </span> {country.population}
                  </p>
                  <p>
                    <span className="data-label">Region: </span> {country.continent}
                  </p>
                  <p>
                    <span className="data-label">Sub Region: </span> {country.region}
                  </p>
                  <p>
                    <span className="data-label">Capital: </span> {country.capital}
                  </p>
                </div>

                <div>
                  <p>
                    <span className="data-label">Top Level Domain: </span> {country.topLevelDomain[0]}
                  </p>
                  <p>
                    <span className="data-label">Currencies: </span> {currencies}
                  </p>
                  <p>
                    <span className="data-label">Languages: </span> {languages}
                  </p>
                </div>
              </div>

              <div className="profile-neighbor-div">
                <p>
                  {" "}
                  <span className="data-label">Border Countries: </span>
                </p>
                <ul>
                  <Neighbors country={country} resultsList={resultsList} setActiveCountry={setActiveCountry} />
                </ul>
              </div>
            </div>
          </div>
          <Wrapper apiKey={"AIzaSyCJUPwoQ07_aX5pwgy6DyeAIrthZ3FdY_s"}>
            <GoogleMap country={country} />
          </Wrapper>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
