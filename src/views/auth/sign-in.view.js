import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import { blue } from '@material-ui/core/colors';

import { useHistory } from "react-router-dom";
import { Formik, Form } from 'formik';
import * as Yup from 'yup';


function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
  password: Yup.string()
    .required('Required')
});

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },

  submitWrapper: {
    position: 'relative',
  },

  submitButton: {
    display: 'block',
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },

  buttonProgress: {
    color: blue[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
}));

const SignIn = () => {
  const classes = useStyles();
  const history = useHistory();
  const [loading, setLoading] = React.useState(false);

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.wrapper}>
        <div className={classes.paper}>

          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
        </Typography>

          <Formik
            initialValues={{
              email: '',
              password: '',
              checked: false,
            }}
            validationSchema={LoginSchema}
            onSubmit={(values, actions) => {

              // setSuccess(false);
              setLoading(true);

              setTimeout(() => {

                //   alert(JSON.stringify(values, null, 2));

                actions.setSubmitting(false);

                // setSuccess(true);
                setLoading(false);

                history.push('/dashboard');
              }, 2000);
            }} >

            {({ values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting }) => (
                <Form noValidate autoComplete="off" className={classes.form}>

                  <TextField
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    name="email"
                    label="Email Address"
                    value={values.email}
                    helperText={errors.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.email && touched.email ? true : null}
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
                    value={values.password}
                    helperText={errors.password}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    error={errors.password && touched.password ? true : null}
                  />

                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />

                  <div className={classes.submitWrapper}>
                    <Button
                      fullWidth
                      color="primary"
                      size="large"
                      variant="contained"
                      disabled={loading}
                      onClick={handleSubmit}
                      className={classes.submitButton}
                    >
                      {isSubmitting ? 'Signing in ...' : 'Login'}
                    </Button>
                    {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                  </div>

                  <Grid container>
                    <Grid item xs>
                      <Link href="#" variant="body2">
                        Forgot password?
                      </Link>
                    </Grid>
                    <Grid item>
                      <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                      </Link>
                    </Grid>
                  </Grid>
                </Form>
              )}
          </Formik>
        </div>
      </Paper>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}

export default SignIn;