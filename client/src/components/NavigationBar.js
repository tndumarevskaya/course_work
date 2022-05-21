import React, {useContext} from "react";
import {Context} from "../index"
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Button from "react-bootstrap/Button";
import { FAVOURITE_ROUTE, MAINPAGE_ROUTE } from "../utils/consts";
import "../styles/NavigationBar.css";

const NavigationBar = () => {
    const {user} = useContext(Context);
    return (
        <div>
            <Navbar className="header">
                <Button className="favourite" to={FAVOURITE_ROUTE}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                         <path d="M0 0h24v24H0z" fill="none"/>
                         <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                     </svg>
                </Button>
                <Nav.Link className="title" to={MAINPAGE_ROUTE}>Нижний Новгород</Nav.Link>
            </Navbar>
        </div>
    );
};

export default NavigationBar;