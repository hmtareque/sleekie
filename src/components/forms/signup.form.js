import React from 'react';
import { Formik, Form } from 'formik';
import { styled } from '@material-ui/core/styles';
import * as Yup from 'yup';

import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField
} from '@material-ui/core';


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

  wrapper: {
    margin: theme.spacing(1),
    position: 'relative',
  },
  // submitButton: {
   
  // '&:hover': {
  //   background: theme.palette.blue,
  //   color: theme.palette.blue,

  // }
  // },

  // buttonSuccess: {
  //   backgroundColor: green[500],
  //   '&:hover': {
  //     backgroundColor: green[700],
  //   },
  // },
  // fabProgress: {
  //   color: green[500],
  //   position: 'absolute',
  //   top: -6,
  //   left: -6,
  //   zIndex: 1,
  // },
  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

  // lineProgress: {
  //   display: 'block',
  //   width: '100%',
  //   '& > * + *': {
  //     margin: theme.spacing(2),
  //   },
  //   padding: '10px'
  // },

  // circleSpin: {
  //   display: 'flex',
  //   '& > * + *': {
  //     marginLeft: theme.spacing(2),
  //   },
  // },

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
  



    return   (


<Card>
     



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


          <form
          onSubmit={handleSubmit} noValidate autoComplete="off"
        >
          <CardHeader
            subheader="The information can be edited"
            title="Profile"
          />
          <Divider />
          <CardContent>
            <Grid
              container
              spacing={3}
            >
              <Grid
                item
                md={6}
                xs={12}
              >

<TextField
 fullWidth
          name="email"
          label="Email Address"
          
          value={values.email}
          
          helperText={errors.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email && touched.email ? true : null}
        />
                
                
              </Grid>
              <Grid
                item
                md={6}
                xs={12}
              >

<TextField
fullWidth
          name="name"
          label="Name"
          value={values.name}
          helperText={errors.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.name && touched.name ? true : null}
        />
                
              </Grid>
            </Grid>
          </CardContent>
          <Divider />
          <CardActions>


          <div className={classes.wrapper}>
        <Button
          color="primary"
          size="large"
          variant="outlined"
          disabled={loading}
          onClick={handleSubmit}
        //  className={classes.submitButton}
          startIcon={<SaveIcon />}
        >
        { isSubmitting ? 'Saving ...'  : 'Save'}
        </Button>
        {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
      </div>
            


            

          </CardActions>
        </form>
  

        
         
          
      )}


    </Formik>

   

    

    </Card>


);
}

export default SignupForm;