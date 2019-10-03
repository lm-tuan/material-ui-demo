import React from 'react';
import Dashboard from './../components/Dashboard';
import Users from './../components/Dashboard/users';

export const HomePage = () => {
    return (
        <div>
            <Dashboard component = {<Users/>}/>
        </div>
    )
}

export default HomePage;