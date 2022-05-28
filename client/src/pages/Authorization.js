import React, {useContext, useState} from 'react';
import {Button, Container, Form} from 'react-bootstrap';
import { Navigate, NavLink, useLocation, useNavigate } from 'react-router-dom';
import '../styles/Authorization.css';
import { LOGIN_ROUTE, MAINPAGE_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";
import {registration, login} from "../http/userAPI";
import { observer } from 'mobx-react-lite';
import { Context } from '..';


const Authorization = observer (() => {
    const {user} = useContext(Context);
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = new useNavigate();

    const click = async () => {
        try {
            let data;
            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }
            user.setUser(data);
            user.setIsAuthorization(true);
            navigate(MAINPAGE_ROUTE);
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <div className='authorization'>
            <div className="authorization-box">
                <h2>{isLogin ? 'Авторизация' : 'Регистрация'}</h2>
                <Form>

                    <Form.Control 
                        className='email' 
                        placeholder="Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}>
                    </Form.Control>

                    <Form.Control 
                        className="password" 
                        placeholder="Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password">
                    </Form.Control>

                    <Button className="buttonEnter" onClick={click}>{isLogin ? 'ВОЙТИ' : 'ЗАРЕГИСТРИРОВАТЬСЯ'}</Button>
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
})

export default Authorization;