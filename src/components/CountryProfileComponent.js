import React from "react";
import { Link } from "react-router-dom";

const CountryProfile = ({ country, setActiveCountry, resultsList }) => {
  console.log(country);

  const neighbors = resultsList.filter(result => country.borders.includes(result.alpha3Code));
  const neighborLinks = neighbors.map(neighbor => {
      return (
          <li>
              <Link to={`/countries/${neighbor.alpha3Code}`} onClick={() => setActiveCountry(neighbor)}>
                    {neighbor.name}
              </Link>
          </li>
      )
  })

  const currencies = country.currencies.map(currency => currency.name).join(', ');
  const languages = country.languages.map(language => language.name).join(', ');

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

        <div>
            <p><span>Native Name: </span> {country.nativeName}</p>
            <p><span>Population: </span> {country.population}</p>
            <p><span>Region: </span> {country.continent}</p>
            <p><span>Sub Region: </span> {country.region}</p>
            <p><span>Capital: </span> {country.capital}</p>
        </div>
        
        <div>
            <p><span>Top Level Domain: </span> {country.topLevelDomain[0]}</p>
            <p><span>Currencies: </span> {currencies}</p>
            <p><span>Languages: </span> {languages}</p>
        </div>

        <div>
          <p>Border Countries: </p>
          <ul>{neighborLinks}</ul>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
