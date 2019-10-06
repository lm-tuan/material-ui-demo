import React, {Component} from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from './listItems';
import useStyleDashboard from './../../commons/styleDashboard';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import * as actions from './../../actions/index';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

class Dashboard extends Component{

  constructor(props) {
    super(props);
    this.state = {
    open:true
    }
  }

  handleDrawerOpen = () => {
  
    this.setState({
      open:true
    })
  };
   handleDrawerClose = () => {
    this.setState({
      open:false
    })
  };
  
  static getDerivedStateFromProps(props, state) {
    if(!localStorage.getItem('token')){
      props.history.push('/login');
      return  null;
    }
   
    
    return null;
  }

  shouldComponentUpdate(nextProps, nextState){
    if(!nextProps.auth.token){
    
      return false;
    }
    return true;

  }

  render(){
    console.log(this.props.auth)
   const classes = this.props.classes;
    return (
    
      <div className={classes.root}>
        <CssBaseline />
        <AppBar position="absolute" className={clsx(classes.appBar, this.state.open && classes.appBarShift)}>
          <Toolbar className={classes.toolbar}>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={this.handleDrawerOpen}
              className={clsx(classes.menuButton, this.state.open && classes.menuButtonHidden)}
            >
              <MenuIcon />
            </IconButton>
            <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
              Home
            </Typography>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="secondary">
                <NotificationsIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer
          variant="permanent"
          classes={{
            paper: clsx(classes.drawerPaper, !this.state.open && classes.drawerPaperClose),
          }}
          open={this.state.open}
        >
          <div className={classes.toolbarIcon}>
            <IconButton onClick={this.handleDrawerClose}>
              <ChevronLeftIcon />
            </IconButton>
          </div>
          <Divider />
          <List>{mainListItems}</List>
        </Drawer>
        <main className={classes.content}>
          <div className={classes.appBarSpacer} />
          <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
              {/* Chart */}
              <Grid item xs={12} md={8} lg={9}>
                <Paper className={classes.paper}>
                   {this.props.component}
                </Paper>
              </Grid>
            </Grid>
          </Container>
        </main>
      </div>
      
    );

  }
}

const mapStateToProps = state => {
  return {
    auth:state.authenication
  }
 
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    registerRequest: (user) => {
      dispatch(actions.registerRequest(user));
    }
  }
}
export default withStyles(useStyleDashboard)(connect(mapStateToProps,mapDispatchToProps)(Dashboard))