import React, { useState } from "react";

const SearchArea = (props) => {
  const [selectOpen, setSelectOpen] = useState(false);


  return (
    <>
      <section id="search-section">
        <div id="search-inputs-div" className="container">
          <div>
            <input type="text" placeholder="Search for a country..." value={props.searchString} onChange={(e) => props.setSearchString(e.target.value)} />
          </div>

          <div id="custom-select">
            <div id="custom-select-header" onClick={() => setSelectOpen(!selectOpen)}>
              <span>{props.regionFilter === "All" ? "Filter by Region" : props.regionFilter}</span>
            </div>
            <div id="custom-select-dropdown" style={selectOpen ? { height: "200px" } : { height: "0px" }}>
              <div onClick={() => {
                props.setRegionFilter("All")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">All Regions</span>
              </div>

              <div onClick={() => {
                props.setRegionFilter("Africa")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">Africa</span>
              </div>

              <div onClick={() => {
                props.setRegionFilter("Americas")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">Americas</span>
              </div>

              <div onClick={() => {
                props.setRegionFilter("Asia")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">Asia</span>
              </div>

              <div onClick={() => {
                props.setRegionFilter("Europe")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">Europe</span>
              </div>

              <div onClick={() => {
                props.setRegionFilter("Oceania")
                setSelectOpen(false)
              }}>
                <span className="custom-select-dropdown-option">Oceania</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchArea;
