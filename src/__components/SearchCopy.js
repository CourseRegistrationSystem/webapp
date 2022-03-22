import React, {useRef, useState, useEffect} from 'react';
//Main Context
import {useMainContext} from '../context/context';

import {
  Card,
  CardBody,
  Col,
  ListGroupItem,
  Row,
} from 'reactstrap'
import { Link } from 'react-router-dom';

import { Icon } from '@iconify/react';
import checkboxBlankCircle from '@iconify/icons-mdi/checkbox-blank-circle';
import gaugeIcon from '@iconify/icons-mdi/gauge';

function Searchcopy(props) {

    console.log(props.data)
    const {eventData, setSelectedEvent, setReRenderMarkers} = useMainContext();
    console.log(setSelectedEvent)
    const searchBox = useRef();
    const optionBox = useRef();
    //Matching results
    const [matchEvent, setMatchEvent] = useState(props.data);
    //Handle dropDown
    const [storeSelection, setStoreSelection] = useState("All");



    // They have changed their filter option. We want the markers to change aswell
    // useEffect(() => {
    //     //First we want to sort out the Markers
    //     let filterdEventData = filterEventData(eventData);
    //     setReRenderMarkers(filterdEventData);
    //     //Now we want to sort out the search results
    //     userSearch(searchBox.current.value.toLowerCase(), filterdEventData);
    // }, [storeSelection])



    return (
        <>
            

                {props.data.map(ev => {
                    return(<ListGroupItem style={{width: '100%'}}><div key={ev.id}>

                        {/* <div>speed : {ev.Device.name}</div> */}
                        {/* <td>{ev.region.title}</td>
                        {ev.region.title ? <td><a href="#/TestingMap"
                        onClick={() => {setSelectedEvent(ev)}}>Click Here</a></td> : <td></td>} */}



                      <Link to='#' onClick={() => {setSelectedEvent(ev)} }>

                      {/* <div className='icon-arrow-right-circle' style={{float: 'left'}} ></div> */}
                      <Icon icon={checkboxBlankCircle} color="#0fa958" height="15"/>
                      {/* <td>speed : {ev.Device.name}</td> */}
                      <td>{ev.Device.name}</td>

                        <Icon icon={gaugeIcon} color="black" height="20" style={{float: 'right'}}/>
                        <div style={{float: 'right'}}>{ev.speed} </div>

                        

                      </Link> 

                      </div></ListGroupItem>)

                })}
                
        </>
    );
}

export default Searchcopy;
