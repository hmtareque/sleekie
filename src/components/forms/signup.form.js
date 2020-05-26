import React, { useRef } from 'react';
import { Formik, Form, ErrorMessage } from 'formik';
import { useHistory } from "react-router-dom";
import { styled } from '@material-ui/core/styles';
import * as Yup from 'yup';

import Paper from '@material-ui/core/Paper';

import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';
import { green, blue } from '@material-ui/core/colors';
import Fab from '@material-ui/core/Fab';
import CheckIcon from '@material-ui/icons/Check';
import SaveIcon from '@material-ui/icons/Save';
import SaveAltIcon from '@material-ui/icons/SaveAlt';

import Backdrop from '@material-ui/core/Backdrop';
import { fade } from '@material-ui/core/styles/colorManipulator';


import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';

import FormGroup from '@material-ui/core/FormGroup';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';

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

import Alert from '@material-ui/lab/Alert';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

import { SnackbarProvider, useSnackbar } from 'notistack';


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


  bapro: {
    width: '200px',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },


  buttonProgress: {
    color: green[500],
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: fade(blue[100], 0.5),
    color: blue[800],
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


  formControl: {
    // margin: theme.spacing(1),
    width: '100%',
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
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
    age: Yup.number()
    .required('Required'),

    position: Yup.string()
    .required('Required'),
    checked: Yup.boolean()
    .required('Please check')
});

const SignupForm = ({ person }) => {

  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const [showAlert, setShowAlert] = React.useState(true);

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();


  console.log('rendered');

  return (


    <Card>




      <Formik
        initialValues={{
          name: person.name,
          email: person.email,
          age: '',
          position: '',
          checked: false,
          multiline: 'default value',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {

          setSuccess(false);
          setLoading(true);
          setOpen(true);

          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            actions.setSubmitting(false);

            setSuccess(true);
            setLoading(false);
            setOpen(false);

            enqueueSnackbar('This is a success message!', {
            variant: "success",
            anchorOrigin: {
              vertical: 'bottom',
              horizontal: 'right',
          }});

            //history.push('/table');


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


            <Form noValidate autoComplete="off"
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
                    <FormControl className={classes.formControl}>

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

                    </FormControl>
                  </Grid>

                  <Grid item
                    md={6}
                    xs={12}>
                    <FormControl className={classes.formControl} error={errors.age && touched.age ? true : null}>
                      <InputLabel id="demo-simple-select-label">Age</InputLabel>
                      <Select
                        name="age"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={values.age}
                        onChange={handleChange}
                        onBlur={handleBlur}
                      >
                        <MenuItem value={10}>Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                      </Select>
                      <FormHelperText>{errors.age}</FormHelperText>
                    </FormControl>
                  </Grid>

                  <Grid item md={12}>
                    <FormControl component="fieldset" error={errors.position && touched.position ? true : false}>
                      <FormLabel component="legend">Position</FormLabel>
                      <RadioGroup row aria-label="position" name="position" defaultValue="">
                        <FormControlLabel
                          value="top"
                          control={<Radio color="primary" />}
                          label="Top"
                          onChange={handleChange}
                          onBlur={handleBlur}
                      //    error={errors.position && touched.position ? true : null}
                        />
                        <FormControlLabel
                          value="start"
                          control={<Radio color="primary" />}
                          label="Start"
                          onChange={handleChange}
                          onBlur={handleBlur}
                       //   error={errors.position && touched.position ? true : null}
                        />
                        <FormControlLabel
                          value="bottom"
                          control={<Radio color="primary" />}
                          label="Bottom"
                          onChange={handleChange}
                          onBlur={handleBlur}
                       //   error={errors.position && touched.position ? true : null}
                        />
                      </RadioGroup>
                      <FormHelperText>{errors.position}</FormHelperText>
                    </FormControl>
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
                      // helperText={errors.name}
                      onChange={handleChange}
                      onBlur={handleBlur}

                    />
                    <ErrorMessage name="name" />

                  </Grid>


                  <Grid item md={12}>
                  <FormControl error={errors.checked && touched.checked ? true : false} component="fieldset">
        
                  
                  <FormLabel component="legend">Pick two</FormLabel>
                    <FormControlLabel
                      control={
                        <Checkbox
                          checked={values.checked}
                          onChange={handleChange}
                          name="checked"
                          color="primary"
                        />
                      }
                      label="Primary"
                    />
                  <FormHelperText>{ errors.checked }</FormHelperText>
                    </FormControl>
                  </Grid>



                  <Grid item md={12}>
                  <TextField
                  fullWidth 
                  name="multiline"
          id="outlined-multiline-static"
          label="Multiline"
          multiline
          rows={4}

          value={values.multiline}
          onChange={handleChange}
                          onBlur={handleBlur}
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
                    {isSubmitting ? 'Saving ...' : 'Save'}
                  </Button>
                  {loading && <CircularProgress size={24} className={classes.buttonProgress} />}
                </div>





              </CardActions>

              

            </Form>
          )}


      </Formik>


      <Backdrop className={classes.backdrop} open={open}>
        {/* <CircularProgress color="inherit" /> */}
        <div className={classes.bapro}>
          <LinearProgress />
          {/* <LinearProgress color="secondary" /> */}
        </div>
      </Backdrop>

      <div className="">
      <Collapse in={showAlert}>
        <Alert
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => {
                setShowAlert(false);
              }}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          Close me!
        </Alert>
      </Collapse>
    </div>


    </Card>


  );
}

export default SignupForm;