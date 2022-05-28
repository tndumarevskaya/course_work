import React, {useContext, useState} from "react";
import {Context} from "../index"
import Nav from "react-bootstrap/Nav";
import {Button} from "react-bootstrap";
import { FAVOURITE_ROUTE, LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import "../styles/NavigationBar.css";
import {observer} from 'mobx-react-lite';
import {useNavigate } from 'react-router-dom';

const NavigationBar = observer (() => {
    const navigate = useNavigate()
    const {user} = useContext(Context);

    return (
        <div>
            <div className="header">
                {user.isAuthorization ?
                <Button className="favourite" 
                    onClick={() => navigate(FAVOURITE_ROUTE)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                     <path d="M0 0h24v24H0z" fill="none"/>
                     <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                </svg>
                </Button>
                :
                <Button className="account" 
                    onClick={() => navigate(LOGIN_ROUTE)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                </Button>
                }
                <Nav.Link className="title" onClick={() => navigate(MAINPAGE_ROUTE)}>НИЖНИЙ НОВГОРОД</Nav.Link>
            </div>
        </div>
    );
})

export default NavigationBar;
