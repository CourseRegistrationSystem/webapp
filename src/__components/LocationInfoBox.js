import React from 'react';
// import { withGoogleMap, GoogleMap, withScriptjs, InfoWindow, Marker } from "react-google-maps";

function LocationInfoBox({info}) {
  // onInfoWindowClose = (event) => { };
    return (
      <>
        <div className="location-info">
            {/* <h2>{info.title}</h2> */}
            <ul>
                {/* <li>Plate Number: <strong>{info.id}</strong></li>
                <li>Speed: <strong>{info.speed}</strong></li>
                <li>TotalTrialTime: <strong>{info.TotalTrialTime}</strong></li>
                <li>TotalDistanceTravel: <strong>{info.TotalDistanceTravel}</strong></li>
                <li>MaximumSpeedAchieve: <strong>{info.MaximumSpeedAchieve}</strong></li>
                <li>AverageTravelingSpeed: <strong>{info.AverageTravelingSpeed}</strong></li>
                <li>MaximumAcceleration: <strong>{info.MaximumAcceleration}</strong></li>
                <li>AverageAcceleration: <strong>{info.AverageAcceleration}</strong></li>
                <li>MaximumDeclaration: <strong>{info.MaximumDeclaration}</strong></li>
                <li>AverageDeclaration: <strong>{info.AverageDeclaration}</strong></li> */}
                <li>latitude: <strong>{info.lat}</strong></li>
                <li>longitude: <strong>{info.lng}</strong></li>
                <li>speed: <strong>{info.speed}</strong></li>
                <li>address: <strong>{info.address}</strong></li>
                <li>city: <strong>{info.city}</strong></li>
                <li>state: <strong>{info.state}</strong></li>
                <li>country: <strong>{info.country}</strong></li>
            </ul>
        </div>

     


</>
    );
}

export default LocationInfoBox;
