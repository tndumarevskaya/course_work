import React, { useContext } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom';
import { authorizationRoutes, publicRoutes } from '../routes';
import { Context } from '../index';
import { MAINPAGE_ROUTE } from '../utils/consts';
import { observer } from 'mobx-react-lite';

const AppRouter = observer (() => {
    const {user} = useContext(Context);

    return (
        <Routes>
            {user.isAuthorization && authorizationRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={Element}></Route>
            )}
            {publicRoutes.map(({path, Element}) =>
                    <Route key={path} path={path} element={Element}></Route>
            )}
            <Route path="*" element={<Navigate replace to={MAINPAGE_ROUTE}/>}/>
        </Routes>
    );
})

export default AppRouter;