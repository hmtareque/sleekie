import React, { useRef } from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { useHistory } from "react-router-dom";
import axios from "axios";
import { styled } from "@material-ui/core/styles";
import * as Yup from "yup";

import Paper from "@material-ui/core/Paper";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CircularProgress from "@material-ui/core/CircularProgress";
import { green, blue } from "@material-ui/core/colors";
import Fab from "@material-ui/core/Fab";
import CheckIcon from "@material-ui/icons/Check";
import SaveIcon from "@material-ui/icons/Save";
import SaveAltIcon from "@material-ui/icons/SaveAlt";

import Backdrop from "@material-ui/core/Backdrop";
import { fade } from "@material-ui/core/styles/colorManipulator";

import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormLabel from "@material-ui/core/FormLabel";

import FormGroup from "@material-ui/core/FormGroup";
import Checkbox from "@material-ui/core/Checkbox";
import CheckBoxOutlineBlankIcon from "@material-ui/icons/CheckBoxOutlineBlank";
import CheckBoxIcon from "@material-ui/icons/CheckBox";




import {
  Card,
  CardHeader,
  CardContent,
  CardActions,
  Divider,
  Grid,
  Button,
  TextField,
} from "@material-ui/core";

import LinearProgress from "@material-ui/core/LinearProgress";

import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

import { SnackbarProvider, useSnackbar } from "notistack";

import { resources } from "../../config/resources";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  formName: {
    margin: theme.spacing(1),
    width: "100%",
    display: "block",
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "25ch",
  },

  wrapper: {
    margin: theme.spacing(1),
    position: "relative",
  },





  bapro: {
    width: "200px",
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
  },

  backdrop: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: fade(blue[100], 0.5),
    color: blue[800],
  },


  formControl: {
    // margin: theme.spacing(1),
    width: "100%",
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const SignupSchema = Yup.object().shape({
  title: Yup.string().required("Role name is required."),
  first_name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Role name is required."),
  last_name: Yup.string().min(3, "Too Short!").max(50, "Too Long!")
    .required("Role name is required."),
    role_id: Yup.string().required("Role is required."),
});

const UserForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(true);
  const [open, setOpen] = React.useState(false);


  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();

  return (

    <Card style={{ maxWidth: "600px" }}>
      <Formik
        initialValues={{
          title: "",
          first_name: "",
          last_name: "",
          email: '',
          role_id: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {

          //  console.log('>>>>>>>');

        //  console.log(JSON.stringify(values));

          setSuccess(false);
          setLoading(true);
          setOpen(true);

          axios
            .post("http://localhost:3001/roles", values)
            .then((response) => {
           //   console.log(response);

              setSuccess(true);
              setLoading(false);
              setOpen(false);

          

              enqueueSnackbar(`Successfully created ${response.data.role.name} role.`, {
                variant: 'success',
            });

              history.push("/auth/roles");

             

              // enqueueSnackbar('This is a success message!', {
              //     variant: "success",
              //     anchorOrigin: {
              //         vertical: 'bottom',
              //         horizontal: 'right',
              //     }
              // });
            })
            .catch(function (error) {
             // console.log(error.response);

            //  console.log(JSON.stringify(values));


              setSuccess(false);
              setLoading(false);
              setOpen(false);

              //   actions.setErrors(error.response.data.errors);
              actions.setSubmitting(false);
            });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting
        }) => (
           
          <Form noValidate autoComplete="off">
            <CardHeader
              subheader="Create a new user here"
              title="User"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="title"
                      label="Title"
                      value={values.title}
                      helperText={errors ? errors.title : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.title && touched.title ? true : null
                      }
                    />
                  </FormControl>
                </Grid>
                </Grid>

                <Grid container spacing={3}>

                <Grid item md={6} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="first_name"
                      label="First Name"
                      value={values.first_name}
                      helperText={errors ? errors.first_name : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.first_name && touched.first_name ? true : null
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="last_name"
                      label="Last Name"
                      value={values.last_name}
                      helperText={errors ? errors.last_name : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.last_name && touched.last_name ? true : null
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="email"
                      label="Email Address"
                      value={values.email}
                      helperText={errors ? errors.email : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.email && touched.email ? true : null
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item md={12} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="mobile"
                      label="Mobile"
                      value={values.mobile}
                      helperText={errors ? errors.mobile : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.mobile && touched.mobile ? true : null
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item md={6} xs={12}>
                <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-helper-label">Role</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          name="role_id"
          value={values.role_id}
          onChange={handleChange}
          helperText={errors ? errors.role_id : ""}
          error={
            errors && errors.role_id && touched.role_id ? true : null
          }
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={'sdfasdf'}>Ten</MenuItem>
          <MenuItem value={"dfasd"}>Twenty</MenuItem>
          <MenuItem value={"asdfa"}>Thirty</MenuItem>
        </Select>
      </FormControl>
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
                      {isSubmitting ? "Saving ..." : "Save"}
                    </Button>
                    {loading && (
                      <CircularProgress
                        size={24}
                        className={classes.buttonProgress}
                      />
                    )}
                  </div>
               
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default UserForm;
