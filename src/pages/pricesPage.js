import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Title from './../components/Dashboard/title';
import Dashboard from './../components/Dashboard';
import Price from './../components/Dashboard/price'

// Generate Order Data


export default function OrdersPage() {
  return (
    <Dashboard component={<Price/>}/>
  );
}