import React from 'react'

const Header = () => {
    return (
        <>
            <section id="header-section">
                <div className="container">
                    <h1>All Around You!</h1>
                    <h5>Country Search Application</h5>
                    <small>Enter a country name to find information specific to that location or click the dropdown to filter countries by region.</small>
                </div>
            </section>
        </>
    )
}

export default Header;