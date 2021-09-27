import React, { useEffect, useRef } from "react";

const GoogleMap = ({ country }) => {
  const ref = useRef();

  useEffect(() => {
    if (country.latlng) {
      return new window.google.maps.Map(ref.current, {
        center: {
          lat: country.latlng[0] ? country.latlng[0] : 38,
          lng: country.latlng[1] ? country.latlng[1] : -97,
        },
        zoom: 6,
      });
    } 
    return new window.google.maps.Map(ref.current, {
        center: {
          lat: 38,
          lng: -97,
        },
        zoom: 2,
      })
  });

  return <div ref={ref} id="map" />;
};

export default GoogleMap;
