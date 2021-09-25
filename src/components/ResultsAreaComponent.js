import React from 'react'
import CountryProfile from './CountryProfileComponent'

const ResultsArea = (props) => {
    const countryCards = props.countries.map(country => {
        return (
            <div key={country.alpha3code} onClick={() => props.setActiveCountry(country)}>
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
    if(props.activeCountry){
        return <CountryProfile country={props.activeCountry} setActiveCountry={props.setActiveCountry}/>
    }
    return (
        <>
            {countryCards}
        </>
    )   
}

export default ResultsArea;