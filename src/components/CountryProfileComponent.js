import React from "react";
import { Link } from "react-router-dom";
import Neighbors from "./NeighborsComponent";
import { Wrapper } from "@googlemaps/react-wrapper";
import GoogleMap from "./MapComponent";

const CountryProfile = ({ country, setActiveCountry, resultsList }) => {
  console.log(country);

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
            <div className="profile-text-div">
              <div className="profile-header-div">
                <h2>{country.name}</h2>
              </div>

              <div className="profile-stats-div">
                <div>
                  <p>
                    <span className="data-label">Region: </span> {country.region}
                  </p>

                  <p>
                    <span className="data-label">Capital: </span> {country.capital}
                  </p>

                  <p>
                    <span className="data-label">Top Level Domain: </span> {country.topLevelDomain[0]}
                  </p>
                </div>
              </div>
            </div>

            <div className="profile-map-div">
              <Wrapper apiKey={"AIzaSyCJUPwoQ07_aX5pwgy6DyeAIrthZ3FdY_s"}>
                <GoogleMap country={country} />
              </Wrapper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
