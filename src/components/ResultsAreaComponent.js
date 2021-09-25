import React from 'react'

const ResultsArea = ({countries}) => {
    const countryCards = countries.map(country => {
        return (
            <div>
                <div>
                    <img src={country.flag} alt="" />
                </div>
                <div>
                    <h3>{country.name}</h3>
                    <p><span>Population:</span> {country.population}</p>
                    <p><span>Region:</span> {country.continent}</p>
                    <p><span>Capital:</span> {country.captial}</p>
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