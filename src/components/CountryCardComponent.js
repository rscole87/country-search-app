import React from 'react'
import { Link } from "react-router-dom";


const CountryCard = ({country, setActiveCountry}) => {
    return (
        <Link to={`/countries/${country.alpha3Code}`} key={country.alpha3Code}>
        <div
          className="country-card"
          onClick={() => {
            setActiveCountry(country);
          }}
        >
          <div className="flag-div-sm" style={{ backgroundImage: `url(${country.flag})`, backgroundPosition: "center", backgroundSize: "cover" }} />

          <div className="card-content-div">
            <h3 className="country-card-heading">{country.name}</h3>
            <p>
              <span className="data-label">Population:</span> {country.population}
            </p>
            <p>
              <span className="data-label">Region:</span> {country.region}
            </p>
            <p>
              <span className="data-label">Capital:</span> {country.capital}
            </p>
          </div>
        </div>
      </Link>
    )
}

export default CountryCard;