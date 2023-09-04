import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "reactstrap";
import '../styles/thank-you.css'

import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ThankYou = () =>
{
    return <section>
        <Container>
            <Row>
                <Col lg='12' className="pt-5 text-center">
                    <div className="thank_you">
                        <span><FontAwesomeIcon icon={ faCircleCheck } style={ { color: "#32bea6", } } className="icon_check" /></span>
                        <h1 className="mb-3 fw-semibold">Successful</h1>
                        <h3 className="mb-4">Your car is booked.</h3>
                        <h4>THANK YOU!</h4>

                        <Button className="btn primary__btn w-25">
                            <Link to='/'>Back to Home</Link>
                        </Button>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default ThankYou