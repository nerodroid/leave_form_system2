import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { loginUser } from "../../actions/authActions";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import logo from "../../img/UoJ_logo.png";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
  },
  image: {
    backgroundImage: `url(${logo})`,
    backgroundRepeat: "no-repeat",
    backgroundColor:
      theme.palette.type === "light"
        ? theme.palette.grey[50]
        : theme.palette.grey[900],
    backgroundSize: "300px",
    backgroundPosition: "center",
  },
  paper: {
    margin: theme.spacing(8, 16),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.primary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(6, 0, 2),
    width: "150px",
    float: "right",
  },
  heading: {
    textAlign: "center",
  },
}));

const Login = (props) => {
  const [values, setValues] = useState({ email: "", password: "" });
  const { errors } = props;
  const classes = useStyles();
<<<<<<< HEAD
  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });
=======

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
  useEffect(() => {
    if (props.auth.isAuthenticated) {
      props.history.push("/home");
    }
  }, []);

  const onSubmit = (e) => {

    e.preventDefault();
<<<<<<< HEAD
    props.loginUser(values, props.history);
=======

    console.log(values);
    props.loginUser(values, props.history);

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
  };

  const handleChange = (e) => {

    console.log("OnChange");
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (

  
    <div>
      <Grid className={classes.heading}>
        <h1>Document Management System</h1>
      </Grid>
      <Grid container component="main" className={classes.root}>
        <CssBaseline />
        <Grid item xs={false} md={6} className={classes.image} />
        <Grid item xs={12} md={6} component={Paper} elevation={6} square>
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
            </Typography>
<<<<<<< HEAD
            <form className={classes.form} method="POST" noValidate  onSubmit={onSubmit}>
=======

            <form 
            className={classes.form}  
            method="POST"
            noValidate
            onSubmit={onSubmit}
            >

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                size="small"
                onChange={handleChange}
<<<<<<< HEAD
=======

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
              />

              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                size="small"
                onChange={handleChange}
<<<<<<< HEAD
=======

>>>>>>> 692ef66e42e71820e62a7039aca3758ade9afdb3
              />

              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
                size="small"
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
               
                size="small"
              >
                Login
              </Button>
              <Grid container>
                <Grid item xs>
                  <Link href="#" variant="body2" color="secondary">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link href="/sign-up" variant="body2" color="secondary">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

Login.propTypes = {
  loginUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  errors: state.errors,
});

export default connect(mapStateToProps, { loginUser })(Login);
