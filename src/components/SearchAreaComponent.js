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
            <select name="region" id="region" onChange={(e) => props.setRegionFilter(e.target.value)}>
              <option value="" disabled defaultValue>Filter by Region</option>
              <option value="africa">Africa</option>
              <option value="america">America</option>
              <option value="asia">Asia</option>
              <option value="europe">Europe</option>
              <option value="oceania">Oceania</option>
            </select>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchArea;
