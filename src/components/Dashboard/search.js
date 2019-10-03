import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
import styleSearch from './../../commons/styleSearch';


export default function CustomizedInputBase() {
  const classes = styleSearch();

  return (
    <Paper className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search "
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider className={classes.divider} orientation="vertical" />
    </Paper>
  );
}