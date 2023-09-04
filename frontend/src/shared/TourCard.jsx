import React from 'react'
import { Card, CardBody } from 'reactstrap';
import { Link } from 'react-router-dom'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSuitcase, faUserGroup } from '@fortawesome/free-solid-svg-icons';

import "./tour-card.css";

import tours from '../assets/data/tours';

const TourCard = ({tour}) => {
    const {id, v_type, v_name, passenger, gear_shift, baggage, door, price, photo} = tour;

    return <div className='tour_card'>
        <Card>
            <div className="tour_img">
                <img src={photo} alt="car-img" />
            </div>

            <CardBody>
                <h6>{v_type}</h6>
                <h5 className="tour_title"><Link to={`/transport/${id}`}>{v_name}</Link></h5>

                <div className="card_top d-flex align-items-center justify-content-between">
                    <span className='tour_passenger d-flex align-items-center gap-1'>
                        <FontAwesomeIcon icon={faUserGroup} /> {passenger}
                    </span>

                    <span className='tour_gear_shift d-flex align-items-center gap-1'>
                        <img src="https://lh3.googleusercontent.com/emRmD1kpY3VgLUiYq8gzPczob_Pfsbzgue1Ar1q2IHD_7YKbYepcL6pTTERgSEFbmkhXrAsTAgUyXbZUAEhD_EYJVTji3LeTIeh29wei" 
                            alt="gear_shift"
                            className='imgIcon' /> 
                        {gear_shift}
                    </span>

                    <span className='tour_passenger d-flex align-items-center gap-1'>
                        <FontAwesomeIcon icon={faSuitcase} /> 
                        {baggage}
                    </span>

                    <span className='tour_door d-flex align-items-center gap-1'>
                        <img src="https://lh3.googleusercontent.com/Wwgu1YYJV_v-2bLiymbO7gHOie0Hgxd2oRTaIelosGFM3j_u6uq1qyGpO8Bg1aTK9TjlmPol3AT9GLs3gZEnOeW57zuiRZTYxBfEqJg" 
                            alt="doors"
                            className='imgIcon' /> 
                        {door}
                    </span>
                </div>

                <div className="card_bottom d-flex align-items-center justify-content-between mt-3">
                <h5>
                  ${ price }
                  <span> / day</span>
                </h5>
                </div>
            </CardBody>
        </Card>
    </div>
};

export default TourCard