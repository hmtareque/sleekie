import React from 'react';
import { Formik, Form } from 'formik';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { styled } from '@material-ui/core/styles';
import * as Yup from 'yup';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';


import LinearProgress from '@material-ui/core/LinearProgress';


const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formName: {
    margin: theme.spacing(1),
    width: '100%',
    display: 'block'
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
  submitButton: {
    margin: theme.spacing(1),
    marginTop: theme.spacing(2),
    width: '100%',


  // '&:hover': {
  //   background: 'blue',
  //   color: 'white',

  // }
  },

  buttonSuccess: {
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
  fabProgress: {
    color: green[500],
    position: 'absolute',
    top: -6,
    left: -6,
    zIndex: 1,
  },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

  lineProgress: {
    width: '100%',
    '& > * + *': {
      margin: theme.spacing(2),
    },
    padding: '10px'
  },

  circleSpin: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },

}));



const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string()
    .email('Invalid email')
    .required('Required'),
});

const SignupForm = () => {

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  



    return   (<div>
   <h3 className={classes.formName}>Signup</h3>
    <Formik
      initialValues={{
        name: '',
        email: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, actions) => {

        setSuccess(false);
        setLoading(true);

        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          actions.setSubmitting(false);

          setSuccess(true);
        setLoading(false);


        }, 5000);
      }}
    >
      {({ values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting }) => (
        <Form onSubmit={handleSubmit} className={classes.root} noValidate autoComplete="off">
        
           
          <div>

         

     
          <TextField
          name="name"
          label="Name"
          id="standard-required"
          defaultValue={values.name}
          className={classes.textField}
          helperText={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name ? true : null}
        />

<TextField
          name="email"
          label="Email Address"
          id="standard-required"
          defaultValue={values.email}
          className={classes.textField}
          helperText={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email ? true : null}
        />


          </div>
        
         
          


<div className={classes.submitButton}>
<Button
          aria-label="save"
          color="primary"
          variant="outlined"
          size="large"
          
          onClick={handleSubmit}
          startIcon={<SaveIcon />}
        >
          {isSubmitting ? 'Saving ...'  : 'Save'}
        </Button>
        
</div>

{isSubmitting ? <div className={classes.lineProgress}><LinearProgress /></div> : ''}

        </Form>
      )}


    </Formik>

   

    



  </div>
);
}

export default SignupForm;