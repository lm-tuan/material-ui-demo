import React from 'react';
import Dashboard from './../components/Dashboard';
import Info from './../components/Dashboard/report';

export const HomePage = () => {
    return (
        <div>
            <Dashboard component = {<Info/>}/>
        </div>
    )
}

export default HomePage;