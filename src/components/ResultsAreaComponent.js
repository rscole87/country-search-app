import React from 'react'

const ResultsArea = ({countries}) => {
    const countryCards = countries.map(country => {
        return (
            <div key={country.alpha3code}>
                <div>
                    <img className="flag-sm" src={country.flags[1]} alt="" />
                </div>
                <div>
                    <h3>{country.name}</h3>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.continent}</p>
                    <p><span>Capital:</span> {country.capital}</p>
                </div>
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