import React from 'react'
import { Link } from "react-router-dom";

const ResultsArea = (props) => {
    const countryCards = props.countries.map(country => {
        return (
            <div key={country.alpha3Code} onClick={() => {
                props.setActiveCountry(country)
                }}>
                <Link to={`/countries/${country.alpha3Code}`}>
                    <div>
                        <img className="flag-sm" src={country.flags[1]} alt="" />
                    </div>
                    <div>
                        <h3>{country.name}</h3>
                        <p><span>Population:</span> {country.population}</p>
                        <p><span>Region:</span> {country.continent}</p>
                        <p><span>Capital:</span> {country.capital}</p>
                    </div>
                </Link>
            </div>
        )
    })
   
    return (
        <>
            {countryCards}
        </>
    )   
}

export default ResultsArea;