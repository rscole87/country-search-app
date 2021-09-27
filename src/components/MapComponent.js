import React, {useEffect} from "react";
import { Loader } from "@googlemaps/js-api-loader";

const GoogleMap = ({country}) => {
    const loader = new Loader({
        apiKey: "AIzaSyCJUPwoQ07_aX5pwgy6DyeAIrthZ3FdY_s",
        version: "weekly",
        libraries: []
      });
    
      let map = <div id="map" />;
      let mapOptions = {
        center: { lat: country.latlng[0], lng: country.latlng[1] },
        zoom: 8,
      };
    
    
      loader.load()
      .then((google) => {
        new google.maps.Map(map, mapOptions);
      })
      .catch(err => {
        console.log(err)
      });

    return (
        {map}
    )
}

export default GoogleMap;