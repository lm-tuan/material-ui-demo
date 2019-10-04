

import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Field, Form, Formik } from "formik";
import useStyles from './../commons/useStyles';
import { withStyles } from '@material-ui/core/styles';
import * as Yup from "yup";
import { connect } from 'react-redux';
import * as actions from './../actions';
import uuidv1 from 'uuid/v1';
import md5 from 'md5';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      username: "",
      password: "",
      passwordComfirm: ""
    }
  }

  onSubmit = fields => {
    if(fields.password !== fields.passwordComfirm) {
      console.log('error');
      return;
    }else{
      console.log('have account')
      const user = {
        email:fields.email,
        username:fields.username,
        password: md5(fields.password),
        token: uuidv1(),
      }
      this.props.registerRequest(user);
    }
  };

  render() {
    const classes = this.props;
  
    return (
      <Formik
      enableReinitialize
        initialValues={this.state}
        onSubmit={this.onSubmit}
        validationSchema={Yup.object().shape({
          email: Yup.string()
            .email()
            .required('Required')
            .min(2, 'Too Short!')
            .max(50, 'Too Long!'),
          username: Yup.string()
          .required('Required')
          .min(2, 'Too Short!')
          .max(50, 'Too Long!'),
        })}

        render={(props) => {
          return (<Container component="main" maxWidth="xs">
            <CssBaseline />
            <div className={classes.paper}>
              <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
      </Typography>
              <Form className={classes.form} >
                <Field
                  variant="outlined"
                  id="email"
                  label="Email"
                  name="email"
                  margin="normal"
                  required
                  type="text"
                  fullWidth
                  autoComplete="email"
                  autoFocus
                  onChange={props.handleChange}
                  helperText={(props.errors.name && props.touched.name) && props.errors.name}
                  component={TextField}
                />
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
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
                <Field
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  name="passwordComfirm"
                  label="Comfirm Password"
                  type="password"
                  id="passwordComfirm"
                  autoComplete="current-password"
                  onChange={props.handleChange}
                  component={TextField}
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
                <Grid container justify="flex-end">
                  <Grid item>
                    <Link href="/login" variant="body2">
                      Already have an account? Sign up
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
  return {}
 
};
const mapDispatchToProps = (dispatch, props) => {
  return {
    registerRequest: (user) => {
      dispatch(actions.registerRequest(user));
    }
  }
}

export default withStyles(useStyles)(connect(mapStateToProps,mapDispatchToProps)(SignUp))