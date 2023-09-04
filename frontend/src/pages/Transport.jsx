import React, { useState, useEffect } from 'react'
import './../styles/transport.css'

import { Container, Row, Col } from 'reactstrap'

import ServiceList from '../services/ServiceList'
import TourCard from '../shared/TourCard'
import tourData from '../assets/data/tours'

const Transport = () =>
{
  const [ pageCount, setPageCount ] = useState( 0 )
  const [ page, setPage ] = useState( 0 )

  useEffect( () =>
  {
    const pages = Math.ceil( 5 / 4 )
    setPageCount( pages )

  }, [ page ] )

  return (
    <>
      <section>
        <Container>
          <Row>
            <ServiceList />
          </Row>
        </Container>
      </section>

      <section className="header_title">
        <Container>
          <Row>
            <Col lg="12" className="mb-5">
              <h2>Choose Your Car</h2>
              <h5>
                Rent your ideal vehicle for your next adventure with our
                service, offering a variety of options and flexible booking!
              </h5>
            </Col>
          </Row>
        </Container>
      </section>

      <section className='pt-0'>
        <Container>
          <Row>
            {
              tourData?.map( tour => <Col lg='3' className='mb-4' key={ tour.id }><TourCard tour={ tour } /></Col> )
            }

            <Col lg='12'>
              <div className="pagination d-flex align-items-center justify-content-center mt-4 gap-3">
                { [ ...Array( pageCount ).keys() ].map( number => (
                  <span key={ number } onClick={ () => setPage( number ) } className={ page === number ? 'active_page' : '' }>
                    { number + 1 }
                  </span>
                ) ) }
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  )
}

export default Transport