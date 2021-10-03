import React, { useEffect, useRef } from "react";

const GoogleMap = ({ country }) => {
  let coordinates = {
    lat: null,
    lng: null,
  };

  const geocoder = new window.google.maps.Geocoder();

  const ref = useRef();

  useEffect(() => {
    geocoder.geocode({ address: `${country.capital}, ${country.name}` }, (results, status) => {
      if (status == window.google.maps.GeocoderStatus.OK) {
        coordinates.lat = results[0].geometry.location.lat();
        coordinates.lng = results[0].geometry.location.lng();
        alert("location : " + results[0].geometry.location.lat() + " " + results[0].geometry.location.lng());
      } else {
        alert("Something went wrong " + status);
      }
    });


    if (country.latlng) {
      return new window.google.maps.Map(ref.current, {
        center: {
          lat: coordinates.lat,
          lng: coordinates.lng
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
    });
  });

  return <div ref={ref} id="map" />;
};

export default GoogleMap;
