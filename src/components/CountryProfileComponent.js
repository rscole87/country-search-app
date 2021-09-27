import React from "react";
import { Link } from "react-router-dom";

const CountryProfile = ({ country, setActiveCountry, resultsList }) => {
  console.log(country);

  const neighbors = resultsList.filter((result) => {
    if (country.borders) {
      return country.borders.includes(result.alpha3Code);
    }
    return;
  });
  const neighborLinks = neighbors.map((neighbor) => {
    return (
      <Link to={`/countries/${neighbor.alpha3Code}`} onClick={() => setActiveCountry(neighbor)} key={neighbor.alpha3Code}>
        <li>{neighbor.name}</li>
      </Link>
    );
  });
  
  let currencies;

  if (country.currencies){
    currencies = country.currencies.map((currency) => currency.name).join(", ");
  } else {
    currencies = ["None"]
  }

  const languages = country.languages.map((language) => language.name).join(", ");

  return (
    <>
      <section id="country-profile-section">
        <div className="container">
          <div>
            <Link to="/">
              <button className="back-bttn" onClick={() => setActiveCountry(null)}><i className="fa fa-long-arrow-left" />{` `} Back</button>
            </Link>
          </div>

          <div className="profile-content">
            <div className="profile-flag-div">
              <img src={country.flags[1]} alt={`${country.name} Flag`} />
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
                <p> <span className="data-label">Border Countries: </span></p>
                <ul>{neighborLinks}</ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
