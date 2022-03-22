import React, {useState,useRef, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from 'google-map-react';
import Geocode from "react-geocode";
// import {Marker, InfoWindow, AnyReactComponent} from "google-maps-react";
import useSuperCluster from 'use-supercluster';
import LocationMarker from './LocationMarker';
import LocationInfoBox from './LocationInfoBox';
import TargetRealTime from '../views/_Admin/Dashboard/RealTimeInfo/DetailsRealTime'
import Coordinate from '../views/_Admin/Dashboard/TableCoordinate/TableCoordinate'
import kmlfile from '../__components/'
//Main Context
import {useMainContext} from '../context/context';
import Dashboard from '../views/_Admin/Dashboard/Dashboard';



// 'AIzaSyBMXtRX_L8c-aFlCcZIR_574DgEdijNUNE'

function Map({center, eventData, data}) {
  const {selectedEvent, settargetRealTime } = useMainContext();
    console.log(selectedEvent)
    console.log(settargetRealTime)
  const mapRef = useRef();
  const [zoom, setZoom] = useState(1);
  const [bounds, setBounds] = useState(null);
  const [address, setaddress] = useState(null);
  //Info Box
  const [locationInfo, setLocationInfo] = useState(null);
  console.log(locationInfo)
  // const [targetRealTime, settargetRealTime] = useState(null);


    
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
  const points = data.map(event => ({
    "type": "Feature",
    "properties": {
      "cluster": false,
      "eventKey": event.name,
      "eventTitle": event.name,
      "eventType": event.deviceId,
      id : event.deviceId,
      speed : event.speed
    },
    // "obd":{
    //   "speed": event.speed,
    //   "TotalTrialTime": event.OBD[0].TotalTrialTime,
	//   "TotalDistanceTravel": event.OBD[0].TotalDistanceTravel,
	// 		"MaximumSpeedAchieve": event.OBD[0].MaximumSpeedAchieve,
	// 		"AverageTravelingSpeed": event.OBD[0].AverageTravelingSpeed,
	// 		"MaximumAcceleration": event.OBD[0].MaximumAcceleration,
	// 		"AverageAcceleration": event.OBD[0].AverageAcceleration,
	// 		"MaximumDeclaration": event.OBD[0].MaximumDeclaration,
	// 		"AverageDeclaration": event.OBD[0].AverageDeclaration
    // },
    geometry: {
        type: "Point",
        coordinates: [
          parseFloat(event.longitude),
          parseFloat(event.latitude)
          
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
        let longitude = selectedEvent.longitude;
        let latitude = selectedEvent.latitude;
          console.log(longitude);
          mapRef.current.panTo({lat: latitude, lng: longitude});
          mapRef.current.setZoom(19);
      }
  }, [selectedEvent])

  // useEffect(() => {
  //   const interval = setInterval(() => (selectedEvent)  , 5000);
  //   return () => {
  //       clearInterval(interval);
  //   };
  //   }, []);

  return (
    
    
      <div className="map-container">
          <GoogleMapReact
              bootstrapURLKeys={{key: 'AIzaSyC6oQCEcKbgMQ38_EoiudIgZ413ugM1WmA'}}
              center={{ lat: 1.563739, lng: 103.61334 }}
              zoom={13}
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

{data.map((data) => {

 // console.log(dataBaseStation.latitude)
           return(
<AnyReactComponent
           lat={data.latitude}

           lng={data.longitude}
           text={
             <div >

               {/* <img src={basestationIcon}  alt="collarImage"  style={{height: "45px", width: "55px"}}/> */}
               <div style={{color:'white',textAlign: 'center', width: '50px'}}>{data.Device.name}</div>


             </div>

           }
         />
           )
}
)

}


          {clusters.map(cluster => {

              const [longitude, latitude] = cluster.geometry.coordinates;
              
              const {cluster: isCluster, point_count: pointCount} = cluster.properties;
              //Used for icon type
              const clusterId = cluster.properties.eventType;


              if (isCluster){
                  let changeSize = Math.round(pointCount / points.length * 50); // default 100, change cluster shape radius
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

            //   if(eventDataIndexNum.indexOf(clusterId) !== -1 && cluster.geometry.coordinates.length === 2){
              Geocode.setApiKey('AIzaSyC6oQCEcKbgMQ38_EoiudIgZ413ugM1WmA');
              Geocode.setLanguage("en");
              Geocode.setRegion("my");
              Geocode.setLocationType("ROOFTOP");
              Geocode.enableDebug();

              let fulladdress = ""
              let countryaddress = ""
              let stateaddress = ""
              let cityaddress = ""

              Geocode.fromLatLng(latitude, longitude).then(
                (response) => {
                  const address = response.results[0].formatted_address;
                  console.log(address);
                  let city, state, country;
                  for (let i = 0; i < response.results[0].address_components.length; i++) {
                    for (let j = 0; j < response.results[0].address_components[i].types.length; j++) {
                      switch (response.results[0].address_components[i].types[j]) {
                        case "locality":
                          city = response.results[0].address_components[i].long_name;
                          break;
                        case "administrative_area_level_1":
                          state = response.results[0].address_components[i].long_name;
                          break;
                        case "country":
                          country = response.results[0].address_components[i].long_name;
                          break;
                      }
                    }
                  }
                  console.log(city, state, country);
                  console.log(city);
                  console.log(state);
                  console.log(country);
                  console.log(address);
                  // setaddress(address)

                  fulladdress = address
                  cityaddress = city
                  stateaddress = state
                  countryaddress = country
                  
                },
                (error) => {
                  console.error(error);
                }
              );

              return <LocationMarker
              lat={latitude}
              lng={longitude}
              id={8}
              key={cluster.properties.eventKey}
              onClick={() => {
                  setLocationInfo({
                    speed: cluster.properties.speed,

                    lat: latitude,
                    lng: longitude,
                    address : fulladdress,
                    city : cityaddress,
                    state : stateaddress,
                    country : countryaddress,
                  })

                  

                  settargetRealTime({
                    speed: cluster.properties.speed,
                    id: cluster.properties.id,
                    lat: latitude,
                    lng: longitude,
                    address : fulladdress,
                    city : cityaddress,
                    state : stateaddress,
                    country : countryaddress,
                  })




                  }
                  
                  } 
                  
                  />
                  

        //   }


          })}
       
          </GoogleMapReact>
          {locationInfo && <LocationInfoBox info={locationInfo} />}
          {/* {targetRealTime && <TargetRealTime info={targetRealTime} />} */}
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
