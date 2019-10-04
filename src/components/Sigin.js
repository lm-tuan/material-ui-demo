import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import * as Yup from "yup";
import { connect } from 'react-redux';
import * as actions from './../actions';
import { withStyles } from '@material-ui/core/styles';
import { Field, Form, Formik } from "formik";

import useStyles from './../commons/useStyles';

class Sigin extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      token:null
    }
  }

  onSubmit = fields => {
    this.props.loginRequest(fields);
  };
  
  static getDerivedStateFromProps(props, state) {
    if(localStorage.getItem('token')){
      props.history.push('/');
      return;
    }
    console.log('props',props)
    console.log('state',state)
    return undefined;
  }
  shouldComponentUpdate(nextProps, nextState){
    if(nextProps.auth.token){
      nextProps.history.push('/')
      return false;
    }
    return true;
    console.log('nextProps',nextProps);
    console.log('nextState',nextState);
  }

  render() {
    console.log('render');
    const classes = this.props;
    console.log(this.props.auth);
    return (
      <Formik
        enableReinitialize
        initialValues={this.state}
        onSubmit={this.onSubmit} 

        render={(props) => {
          return (
           
            <Container component="main" maxWidth="xs">
              <CssBaseline />
              <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                  <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                  Sign in
          </Typography>
                <Form className={classes.form} noValidate>
                  <Field
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email"
                    name="email"
                    autoComplete="email"
                    onChange={props.handleChange}
                    helperText={(props.errors.name && props.touched.name) && props.errors.name}
                    component={TextField}
                  />
                  <Field
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                    onChange={props.handleChange}
                    component={TextField}
                  />
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Sign In
            </Button>
                  <Grid container>
                    <Grid item xs>
                      <Link href="/restpassword" variant="body2">
                        Forgot password?
                </Link>
                    </Grid>
                    <Grid item>
                      <Link href="/resginter" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              </div>
            </Container>
          )
        }}
      />

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
    loginRequest: (user) => {
      dispatch(actions.loginRequest(user));
    }
  }
}

export default withStyles(useStyles)(connect(mapStateToProps, mapDispatchToProps)(Sigin))