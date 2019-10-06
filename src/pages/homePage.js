import React from 'react';
import Dashboard from './../components/Dashboard';
import Info from './../components/Dashboard/report';

export const HomePage = (props) => {
    return (
        <div>
            <Dashboard history = {props.history} component = {<Info/>}/>
        </div>
    )
}

export default HomePage;