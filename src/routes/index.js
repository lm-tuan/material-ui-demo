import React from 'react';
import LoginPage from './../pages/loginPage';
import ResginterPage from './../pages/resginterPage';
import HomePage from './../pages/homePage';
import ForgotPassword from './../pages/forgotPassword';
import VerifyAccountPage from './../pages/verifyAccountPage';
import OrdersPage from './../pages/ordersPage';
import UsersPage from './../pages/usersPage';
import BlogPage from './../pages/blogPage';
import PricePage from './../pages/pricesPage'

const routes = [
    {
        path:'/',
        exact:true,
        main:({history,location}) => <HomePage location = {location} history = {history}  />
    },
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
    {
        path:'/restpassword',
        exact:true,
        main:({history,location}) => <ForgotPassword location = {location} history = {history}  />
    },
    {
        path:'/verifyaccount',
        exact:true,
        main:({history,location}) => <VerifyAccountPage location = {location} history = {history}  />
    },
    {
        path:'/orders',
        exact:true,
        main:({history,location}) => <OrdersPage location = {location} history = {history}  />
    },
    {
        path:'/users',
        exact:true,
        main:({history,location}) => <UsersPage location = {location} history = {history}  />
    },
    {
        path:'/blogs',
        exact:true,
        main:({history,location}) => <BlogPage location = {location} history = {history}  />
    },
    {
        path:'/prices',
        exact:true,
        main:({history,location}) => <PricePage location = {location} history = {history}  />
    }
];

export default routes;