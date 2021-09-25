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
          <h4>Borders</h4>
          <ul>{neighborLinks}</ul>
        </div>
      </section>
    </>
  );
};

export default CountryProfile;
