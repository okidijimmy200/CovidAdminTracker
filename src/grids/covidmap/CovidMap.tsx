import React from 'react'
import { MapContainer, GeoJSON } from 'react-leaflet'
import "leaflet/dist/leaflet.css"
import "./CovidMap.scss"

export default function CovidMap({ countries }: {countries:any}) {
    // console.log(countries.features)
    const mapStyle = {
      fillColor: 'red',
      weight: 1,
      color: "rgb(255, 207, 241)",
      fillOpacity: 1
    }

    const onEachCountry  = (country: any, layer: any) => {
      layer.options.fillColor = country.properties.color;
      const name = country.properties.ADMIN;
      const confirmedText = country.properties.confirmedText;
      layer.bindPopup(`${name} ${confirmedText}`);
    }
    // console.log(countries)
  return (
    <>
        <MapContainer style={{height: "44vh"}} zoom={1} center={[48,32]}>
        <GeoJSON 
        style={mapStyle} 
        data={countries}
        onEachFeature={onEachCountry}
        />
        </MapContainer>
    </>

  )
}
