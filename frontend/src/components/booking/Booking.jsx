import React, { useState } from "react";
import './booking.css'
import { Form, FormGroup, ListGroup, ListGroupItem, Button } from "reactstrap";

import { useNavigate } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faXmark } from "@fortawesome/free-solid-svg-icons";

const Booking = ( { tour, avgRating } ) =>
{
    const { price, reviews } = tour;
    const navigate = useNavigate()

    const [ credentials, setCredentials ] = useState( {
        userId: '01',
        userEmail: 'example@gmail.com',
        location: '',
        pickupDT: '',
        noDays: '',
    } );

    const handleChange = e =>
    {
        setCredentials( prev => ( { ...prev, [ e.target.id ]: e.target.value } ) )
    };

    const hireFee = 10;
    const totalAmount = Number( price ) * Number( credentials.noDays ) + Number( hireFee );

    // send data to the server
    const handleClick = e =>
    {
        e.preventDefault()

        navigate( '/thank-you' )
    }

    return <div className="booking">
        <div className="booking_top d-flex align-items-center justify-content-between">
            <h3>
                ${ price }
                <span> / day</span>
            </h3>

            <span className="d-flex align-items-center">
                <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                { avgRating === 0 ? null : avgRating } ({ reviews?.length })
            </span>
        </div>

        {/* Booking */ }
        <div className="booking_form">
            <h5>Information</h5>

            <Form className="booking_info-form" onSubmit={ handleClick }>
                <FormGroup>
                    <input
                        type="location"
                        placeholder="Location"
                        id="location"
                        required
                        onChange={ handleChange }
                    />
                </FormGroup>

                <FormGroup className="pickup d-flex align-items-center gap-3">
                    <input
                        type="date"
                        placeholder=""
                        id="pickupDT"
                        required
                        onChange={ handleChange }
                    />

                    <input
                        type="time"
                        placeholder=""
                        id="pickupDT"
                        required
                        onChange={ handleChange }
                    />
                </FormGroup>

                <FormGroup>
                    <input
                        type="number"
                        placeholder="No of Days"
                        id="noDays"
                        required
                        onChange={ handleChange }
                    />
                </FormGroup>
            </Form>
        </div>
        {/* Booking end */ }

        {/* Booking button */ }
        <div className="booking_bottom">
            <ListGroup>
                <ListGroupItem className="border-0 px-0">
                    <h5 className="d-flex align-items-center gap-1">{ price } <FontAwesomeIcon icon={ faXmark } /> 1 day</h5>
                    <span>${ price }</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0">
                    <h5>Car hire charge</h5>
                    <span>${ hireFee }</span>
                </ListGroupItem>

                <ListGroupItem className="border-0 px-0 total">
                    <h5>Total</h5>
                    <span>${ totalAmount }</span>
                </ListGroupItem>
            </ListGroup>

            <Button className="btn primary__btn w-100 mt-4" onClick={ handleClick }>
                Book Now
            </Button>
        </div>
        {/* Booking button end */ }
    </div>
}

export default Booking