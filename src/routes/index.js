import React from 'react';
import LoginPage from './../pages/loginPage';
import ResginterPage from './../pages/resginterPage';


const routes = [
    {
        path:'/login',
        exact:true,
        main:({history,location}) => <LoginPage location = {location} history = {history}  />
    },
    {
        path:'/resginter',
        exact:true,
        main:({history,location}) => <ResginterPage location = {location} history = {history}  />
    },
];

export default routes;