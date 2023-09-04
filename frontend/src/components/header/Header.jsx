import React, { useState, useRef } from "react";

import { faBed, faPlane, faCar, faPerson, faPercent, faLocationDot, faCalendarPlus, faCalendarTimes } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import './header.css';
import './../../shared/searchbar.css';

// for search bar
// import { BASE_URL } from './../../../utils/config'
// import { useNavigate } from "react-router-dom";

function Header ()
{
    // no of days
    const [ selectedDays, setSelectedDays ] = useState( false );
    const [ Days, setDays ] = useState( {
        Days: 0,
    } )

    const handleDay = ( name, operation ) =>
    {
        setDays( ( prev ) =>
        {
            return {
                ...prev,
                [ name ]: operation === "i" ? Days[ name ] + 1 : Days[ name ] - 1,
            };
        } );
    };

    // search bar
    const locationRef = useRef( '' );
    const pickupRef = useRef( '' );
    const nodaysRef = useRef( null );
    const v_typeRef = useRef( null );

    // const navigate = useNavigate()

    const searchHandler = async () =>
    {
        const location = locationRef.current.value
        const pickup = pickupRef.current.value
        const nodays = nodaysRef.current.value
        const v_type = v_typeRef.current.value

        if ( location === '' || pickup === '' || nodays === '' || v_type === '' )
        {
            return alert( "All fields are required!" );
        }

        // const res = await fetch( `${ BASE_URL }/transport/search/getTourBySearch?location=${ location }&pickup=${ pickup }$nodays=${ nodays }&v_type=${ v_type }` )

        // if ( !res.ok ) alert( 'Something went wrong' )

        // const result = await res.json()

        // navigate(
        //     `/transport/search?location=${ location }&pickup=${ pickup }$nodays=${ nodays }&v_type=${ v_type }`,
        //     { state: result.data }
        // )
    }

    return (
        <div>
            <div className="header">
                <div className="headerContainer">
                    <div className="headerList">
                        <div className="headerListItem">
                            <FontAwesomeIcon icon={ faBed } />
                            <span>Stays</span>
                        </div>

                        <div className="headerListItem">
                            <FontAwesomeIcon icon={ faPlane } />
                            <span>Flights</span>
                        </div>

                        <div className="headerListItem acrive">
                            <FontAwesomeIcon icon={ faCar } />
                            <span>Car Rentals</span>
                        </div>

                        <div className="headerListItem">
                            <FontAwesomeIcon icon={ faPerson } />
                            <span>Guide</span>
                        </div>

                        <div className="headerListItem">
                            <FontAwesomeIcon icon={ faPercent } />
                            <span>Package</span>
                        </div>
                    </div>

                    <h1 className="headerTitle1">Get Ultimate Travel Experience</h1>
                    <h1 className="headertitle2">With us</h1>

                    <div className="headerSearch">
                        {/* Location */ }
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faLocationDot } className="headerIcon" />
                            <input
                                type="text"
                                placeholder="Pick-up Location..."
                                className="headerSearchInput"
                                ref={ locationRef } />
                        </div>

                        {/* Pick-up Date & Time */ }
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faCalendarTimes } className="headerIcon" />
                            <input
                                type="datetime-local"
                                placeholder="Pick-up Date & Time..."
                                className="headerSearchInput_dateTime"
                                ref={ pickupRef }
                            />
                        </div>

                        {/* No of days */ }
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faCalendarPlus } className="headerIcon" />
                            <span
                                ref={ nodaysRef }
                                onClick={ () => setSelectedDays( !selectedDays ) }
                                className="headerSearchText"
                            >
                                { `${ Days.Days } No Of Days` }
                            </span>
                            { selectedDays && <div className="days">
                                <div className="dayItem">
                                    <span className="dayText">No Of Days</span>
                                    <div className="dayCounter">
                                        <button className="dayCounterBtn" onClick={ () => handleDay( "Days", "d" ) } disabled={ Days.Days <= 0 }>-</button>
                                        <span className="dayCounter" >{ Days.Days }</span>
                                        <button className="dayCounterBtn" onClick={ () => handleDay( "Days", "i" ) }>+</button>
                                    </div>
                                </div>
                            </div> }
                        </div>

                        {/* Vehicle type */ }
                        <div className="headerSearchItem">
                            <FontAwesomeIcon icon={ faCar } className="headerIcon" />
                            <div className="dropdownSelection">
                                <div className="dropdownItem">
                                    <select ref={ v_typeRef }>
                                        <option value="vehiType">Vehicle Type...</option>
                                        <option value="sedan">Sedan</option>
                                        <option value="suv">SUVs</option>
                                        <option value="minivans">MiniVans</option>
                                        <option value="pTrucks">Pickup Trucks</option>
                                        <option value="passengervans">Passenger Vans</option>
                                    </select>
                                </div>
                            </div>
                        </div>

                        <div className="headerSearchItem">
                            <button className="headerBtn" type="submit" onClick={ searchHandler }>Search</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header