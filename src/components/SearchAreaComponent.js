import React, { useState } from "react";

const SearchArea = (props) => {
  
  return (
    <>
      <section id="search-section">
        <div>
          <div>
            <input type="text" placeholder="Search for a country..." value={props.searchString} onChange={(e) => props.setSearchString(e.target.value)} />
          </div>

          <div>
            <label htmlFor="region" hidden>Region:</label>
            <select name="region" id="region" onChange={(e) => {
              console.log(e.target.value)
              props.setRegionFilter(e.target.value)}
              }>
              <option disabled selected>Filter by Region</option>
              <option value="All">All Regions</option>
              <option value="Africa">Africa</option>
              <option value="Americas">America</option>
              <option value="Asia">Asia</option>
              <option value="Europe">Europe</option>
              <option value="Oceania">Oceania</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchArea;
