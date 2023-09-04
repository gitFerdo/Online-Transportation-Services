import React, { useState } from 'react'

import { Container, Row, Col, Form, FormGroup, Button } from 'reactstrap'
import { Link } from 'react-router-dom'
import '../styles/login.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleUser } from '@fortawesome/free-regular-svg-icons'

const Login = () =>
{
    const [ credentials, setCredentials ] = useState( {
        username: undefined,
        password: undefined,
    } );

    const handleChange = e =>
    {
        setCredentials( prev => ( { ...prev, [ e.target.id ]: e.target.value } ) )
    };

    const handleClick = async ( e ) =>
    {
        e.preventDefault();
        dispatch( { type: "LOGIN_START" } );
        try
        {
            const res = await axios.post( "/auth/login", credentials );
            dispatch( { type: "LOGIN_SUCCESS", payload: res.data.details } );
            navigate( "/" )
        } catch ( err )
        {
            dispatch( { type: "LOGIN_FAILURE", payload: err.response.data } );
        }
    };

    return <section>
        <Container>
            <Row>
                <Col lg='8' className='m-auto'>
                    <div className="login_container d-flex justify-content-between">
                        <div className="login_form">
                            <div className="user">
                                <FontAwesomeIcon icon={ faCircleUser } size="2xl" style={ { "--fa-primary-color": "#11264a", "--fa-secondary-color": "#11264a", } } className='icon' />
                            </div>
                            <h2>Login</h2>

                            <Form>
                                <FormGroup>
                                    <input
                                        type="text"
                                        placeholder="username"
                                        id="username"
                                        onChange={ handleChange }
                                        className="lInput"
                                    />
                                    <input
                                        type="password"
                                        placeholder="password"
                                        id="password"
                                        onChange={ handleChange }
                                        className="lInput"
                                    />
                                </FormGroup>

                                <Button className='btn secondary_btn auth_btn' type='submit' onClick={ handleClick }>Login</Button>
                            </Form>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Login