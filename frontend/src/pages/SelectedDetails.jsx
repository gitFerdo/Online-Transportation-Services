import React, { useRef, useState } from 'react'
import '../styles/selected-details.css'
import { Container, Row, Col, Form, ListGroup } from 'reactstrap'
import { useParams } from 'react-router-dom'
import tourData from '../assets/data/tours'
import calculateAvgRating from '../utils/AvgRating'
import Booking from '../components/booking/Booking'

import { faStar, faUserGroup, faSuitcase, faTag, faUser } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SelectedDetails = () =>
{
  const { id } = useParams();
  const reviewMsgRef = useRef( '' )
  const [ tourRating, setTourRating ] = useState( null );

  const tour = tourData.find( tour => tour.id === id )

  const { photo, images, v_name, v_type, reviews, passenger, gear_shift, baggage, door, features } = tour;

  const { totalRating, avgRating } = calculateAvgRating( reviews );

  // format dates
  const options = { day: 'numeric', month: 'long', year: 'numeric' };

  // submit request to the server
  const submitHandler = e =>
  {
    e.preventDefault();
    const reviewText = reviewMsgRef.current.value;
  }


  return <>
    <section>
      <Container>
        <Row>
          <Col>
            <Col lg='12'>
              <div className="tour_content">
                <div className="car_img">
                  <img src={ photo } alt="v_img" />
                  { images?.map( img => (
                    <img src={ img } alt="v_img" />
                  ) ) }
                </div>

                <div className="tour_info">
                  <h2>
                    { v_name }
                    <div>
                      <h5>{ v_type }</h5>
                    </div>
                  </h2>

                  <div className='d-flex align-items-center gap-5'>
                    <span className='d-flex align-items-center gap-1'>
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                      { avgRating === 0 ? null : avgRating }
                      { totalRating === 0 ? (
                        "Not Rated"
                      ) : (
                        <span>({ reviews?.length })</span>
                      ) }
                    </span>
                  </div>

                  <div className="tour_extra-details">
                    <span>
                      <FontAwesomeIcon icon={ faUserGroup } style={ { color: "#000000", } } /> { passenger }
                    </span>

                    <span>
                      <img src="https://lh3.googleusercontent.com/emRmD1kpY3VgLUiYq8gzPczob_Pfsbzgue1Ar1q2IHD_7YKbYepcL6pTTERgSEFbmkhXrAsTAgUyXbZUAEhD_EYJVTji3LeTIeh29wei"
                        alt="gear"
                        className='iconImg'
                      />
                      { gear_shift }
                    </span>

                    <span>
                      <FontAwesomeIcon icon={ faSuitcase } style={ { color: "#000000", } } /> { baggage }
                    </span>

                    <span>
                      <img src="https://lh3.googleusercontent.com/Wwgu1YYJV_v-2bLiymbO7gHOie0Hgxd2oRTaIelosGFM3j_u6uq1qyGpO8Bg1aTK9TjlmPol3AT9GLs3gZEnOeW57zuiRZTYxBfEqJg"
                        alt="door"
                        className='iconImg'
                      />
                      { door }
                    </span>
                  </div>
                </div>
              </div>
            </Col>

            <Col lg='12'>
              <div className="features">
                <h5>Car Features</h5>

                {
                  features?.map( feature => (
                    <div className="tour_features-details">
                      <div className="row">
                        <div className="item d-block align-items-center has-matchHeight" style={ { height: 46, } } >
                          <FontAwesomeIcon icon={ faTag } className="icon" />
                          { feature }
                        </div>
                      </div>
                    </div>
                  ) )
                }
              </div>
            </Col>

            <Col lg='12'>
              <div className="tour_reviews">
                <h4>Reviews({ reviews?.length } reviews)</h4>

                <Form onSubmit={ submitHandler }>
                  <div className="d-flex align-items-centre gap-3 mb-4 rating_group">
                    <span onClick={ () => setTourRating( 1 ) }>
                      1
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                    </span>

                    <span onClick={ () => setTourRating( 2 ) }>
                      2
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                    </span>

                    <span onClick={ () => setTourRating( 3 ) }>
                      3
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                    </span>

                    <span onClick={ () => setTourRating( 4 ) }>
                      4
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                    </span>

                    <span onClick={ () => setTourRating( 5 ) }>
                      5
                      <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } />
                    </span>
                  </div>

                  <div className="review_input">
                    <input
                      type="text"
                      ref={ reviewMsgRef }
                      placeholder="Share your thoughts...."
                      required
                    />
                    <button
                      className="sub_btn"
                      type="submit"
                    >
                      Submit
                    </button>
                  </div>
                </Form>

                <ListGroup className="user_reviews">
                  {
                    reviews?.map( review => (
                      <div className="review_item">
                        <FontAwesomeIcon icon={ faUser } size="2xl" />

                        <div className="w-100">
                          <div className='d-flex align-items-center justify-content-between'>
                            <div>
                              <h5>Jhon</h5>
                              <p>{ new Date( '01-18-2023' ).toLocaleDateString( 'en-US', options ) }</p>
                            </div>

                            <span className='d-flex align-items-center'>
                              5
                              <FontAwesomeIcon icon={ faStar } style={ { color: "#ffc107", } } className="img" />
                            </span>
                          </div>

                          <h6>Amazing</h6>
                        </div>
                      </div>
                    ) )
                  }
                </ListGroup>
              </div>
            </Col>
          </Col>

          <Col lg='4'>
            <Booking tour={ tour } avgRating={ avgRating } />
          </Col>
        </Row>
      </Container>
    </section>
  </>
}

export default SelectedDetails;