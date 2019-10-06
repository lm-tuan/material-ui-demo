import React from 'react';
import Dashboard from './../components/Dashboard';
import Orders from './../components/Dashboard/orders'

// Generate Order Data


 class  OrdersPage extends React.Component {
 render(){
  return (
    <Dashboard component={<Orders/>}/>
  );
 }
}

export default OrdersPage;