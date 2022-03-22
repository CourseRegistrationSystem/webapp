import React, {useState,useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
// import {Marker, InfoWindow, AnyReactComponent} from "google-maps-react";
import useSuperCluster from 'use-supercluster';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBoxPublic';
import kmlfile from '.'
//Main Context
import {useMainContext} from '../context/context';

// 'AIzaSyBMXtRX_L8c-aFlCcZIR_574DgEdijNUNE'

function Map({center, eventData}) {
  const {selectedEvent} = useMainContext();

  const mapRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [bounds, setBounds] = useState(null);
  //Info Box
  const [locationInfo, setLocationInfo] = useState(null);


  //Index for reference
  const eventDataIndex = {
      8: "Wildfires",
      10: "Severe Storms",
      12: "Volcanoes",
      15: "Sea and Lake Ice"
  }

  const AnyReactComponent = ({ text }) => <div>{text}</div>;

  //Create an Array of its keys
  let eventDataIndexNum = Object.keys(eventDataIndex);
  eventDataIndexNum = eventDataIndexNum.map(index => Number(index));

  //Set up the geo-features. Do not need them anymore.
  const points = eventData.map(event => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "eventKey": event.licence,
      "eventTitle": event.title,
      "eventType": event.region.id
    },
    "obd":{
      "speed": event.OBD[0].Speed,
      "TotalTrialTime": event.OBD[0].TotalTrialTime,
			"TotalDistanceTravel": event.OBD[0].TotalDistanceTravel,
			"MaximumSpeedAchieve": event.OBD[0].MaximumSpeedAchieve,
			"AverageTravelingSpeed": event.OBD[0].AverageTravelingSpeed,
			"MaximumAcceleration": event.OBD[0].MaximumAcceleration,
			"AverageAcceleration": event.OBD[0].AverageAcceleration,
			"MaximumDeclaration": event.OBD[0].MaximumDeclaration,
			"AverageDeclaration": event.OBD[0].AverageDeclaration
    },
    "geometry": {
      "type": "Point",
      "coordinates": [
        event.geometries[0].coordinates[0],
        event.geometries[0].coordinates[1]
      ]
      }
  }));

  //Get clusters
  const {clusters, supercluster} = useSuperCluster({
      points,
      bounds,
      zoom,
      options: {radius: 75, maxZoom: 20}
  });

  //User has clicked on searched link. They want to go to it
  useEffect(() => {
      if(selectedEvent !== null){
          let longitude = selectedEvent.geometries[0].coordinates[0];
          let latitude = selectedEvent.geometries[0].coordinates[1];
          console.log(longitude);
          mapRef.current.panTo({lat: latitude, lng: longitude});
          mapRef.current.setZoom(16);
      }
  }, [selectedEvent])



  return (
      <div className="map-container-public">
          <GoogleMapReact
              bootstrapURLKeys={{key: 'AIzaSyC6oQCEcKbgMQ38_EoiudIgZ413ugM1WmA'}}
              center={{ lat: 2.9213, lng: 101.6559 }}
              zoom={15}
              yesIWantToUseGoogleMapApiInternals
              onGoogleApiLoaded={({map}) => {
                  mapRef.current = map;
              }}
              onChange={({zoom, bounds}) => {
                  setZoom(zoom);
                  setBounds([
                      bounds.nw.lng,
                      bounds.se.lat,
                      bounds.se.lng,
                      bounds.nw.lat
                  ]);
              }}
              onClick={() => {setLocationInfo(null)}}
              onDrag={() => setLocationInfo(null)}

          >




          {clusters.map(cluster => {

              const [longitude, latitude] = cluster.geometry.coordinates;
              const {cluster: isCluster, point_count: pointCount} = cluster.properties;
              //Used for icon type
              const clusterId = cluster.properties.eventType;
              if (isCluster){
                  let changeSize = Math.round(pointCount / points.length * 100);
                  //Can't exceed 40 px
                  let addSize = Math.min(changeSize * 10, 10);
                  return (
                      <section key={cluster.id} lat={latitude} lng={longitude}>
                          <div className="cluster-marker" style={{
                              width: `${addSize + changeSize}px`,
                              height: `${addSize + changeSize}px`
                          }}
                          onClick={() => {
                              const expansionZoom = Math.min(
                                  supercluster.getClusterExpansionZoom(cluster.id),
                                  20
                              );
                              mapRef.current.setZoom(expansionZoom);
                              mapRef.current.panTo({lat: latitude, lng: longitude});
                          }}>
                              {pointCount}
                          </div>
                      </section>
                  )
              }
              //Not a cluster. Just a single point
              if(eventDataIndexNum.indexOf(clusterId) !== -1 && cluster.geometry.coordinates.length === 2){
              return <LocationMarker
              lat={latitude}
              lng={longitude}
              id={clusterId}
              key={cluster.properties.eventKey}
              onClick={() => {
                setLocationInfo({
                  id: cluster.properties.eventKey,
                  title: cluster.properties.eventTitle,

                  speed: cluster.obd.speed,
                  TotalTrialTime: cluster.obd.TotalTrialTime,
                  TotalDistanceTravel: cluster.obd.TotalDistanceTravel,
                  MaximumSpeedAchieve: cluster.obd.MaximumSpeedAchieve,
                  AverageTravelingSpeed: cluster.obd.AverageTravelingSpeed,
                  MaximumAcceleration: cluster.obd.MaximumAcceleration,
                  AverageAcceleration: cluster.obd.AverageAcceleration,
                  MaximumDeclaration: cluster.obd.MaximumDeclaration,
                  AverageDeclaration: cluster.obd.AverageDeclaration,

                  lat: latitude,
                  lng: longitude,


                })

{/* <InfoWindow
     marker={activeMarker}
     visible={showInfoWindow}
    >
     <div>
      <strong>Info Window</strong>
      <div>
       Information would be displayed here.
      </div>
     </div>
    </InfoWindow> */}

                  }
                  } />

          }
          })}
            {/* <Marker
    title={'The marker`s title will appear as a tooltip.'}
    name={'SOMA'}
    position={{lat: 2.9213, lng: 101.6559}} /> */}

{/* <AnyReactComponent
    lat={2.9213}
    lng={101.6559}
    text="My Marker"
  /> */}
          </GoogleMapReact>
          {locationInfo && <LocationInfoBox info={locationInfo} />}
      </div>
  );
}

Map.defaultProps = {
  center: {
      lat: 29.305561,
      lng: -3.981108
  }
}

export default Map;
