import React from 'react';
import Dashboard from './../components/Dashboard';
import Price from './../components/Dashboard/price'

// Generate Order Data


export default function OrdersPage() {
  return (
    <Dashboard component={<Price/>}/>
  );
}