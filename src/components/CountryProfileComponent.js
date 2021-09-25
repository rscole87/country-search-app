import React from 'react'

const CountryProfile = ({country, setActiveCountry}) => {
    return (
        <>
            <section id="country-profile-section">
                <div>
                    <button onClick={setActiveCountry(null)}>Back</button>
                </div>

                <div>
                    <img src={country.flags[1]} alt={`${country.name} Flag`} />
                </div>
                <div>
                    <h2>{country.name}</h2>
                </div>
            </section>
        </>
    )
}

export default CountryProfile