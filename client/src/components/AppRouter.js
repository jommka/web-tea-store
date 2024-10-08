import React, {useContext} from 'react';
import {authRoutes, publicRoutes} from "../routes";
import {Route, Routes, Navigate} from "react-router-dom";
import {MAIN_ROUTE} from "../utils/consts";
import {Context} from "../index";

const AppRouter = () => {
    const {user} = useContext(Context)
    return (
        <Routes>
            {
               user.isAuth && authRoutes.map(({path, Component}) =>
               <Route key={path} path={path} element={<Component />} exact />)
            }
            {
                publicRoutes.map(({path, Component}) =>
                    <Route key={path} path={path} element={<Component />} exact />)
            }
            <Route path="*" element={<Navigate to={MAIN_ROUTE} />} />
        </Routes>
    );
};

export default AppRouter;