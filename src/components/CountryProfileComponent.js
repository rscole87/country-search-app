import React from "react";
import { Link } from "react-router-dom";

const CountryProfile = ({ country, setActiveCountry }) => {
    console.log(country)

  return (
    <>
      <section id="country-profile-section">
        <div>
          <Link to="/">
            <button onClick={() => setActiveCountry(null)}>Back</button>
          </Link>
        </div>

        <div>
          <img src={country.flags[1]} alt={`${country.name} Flag`} />
        </div>
        <div>
          <h2>{country.name}</h2>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
