import React from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import { NavLink, useLocation } from 'react-router-dom';
import '../styles/Authorization.css';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

const Authorization = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    return (
        <div className='authorization'>
            <div className="authorization-box">
                <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>
                    <Form.Control className='email' placeholder="Email">
                    </Form.Control>
                    <Form.Control className="password" placeholder="Password">
                    </Form.Control>
                    <Button className="buttonEnter">{isLogin ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}</Button>
                    {isLogin ? 
                    <div className='registry'>
                        Нет аккаунта?<NavLink className='registry-link' to={REGISTRATION_ROUTE}>Регистрация</NavLink>
                    </div>
                    :
                    <div className='registry'>
                        Есть аккаунт?<NavLink className='registry-link' to={LOGIN_ROUTE}>Войти</NavLink>
                    </div>
                    }
                </Form>
            </div>
        </div>
    )
}

export default Authorization;