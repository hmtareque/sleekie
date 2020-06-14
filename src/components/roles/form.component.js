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

import Flash from "../common/flash.component";

import Favorite from "@material-ui/icons/Favorite";
import FavoriteBorder from "@material-ui/icons/FavoriteBorder";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
  name: Yup.string()
    .min(3, "Too Short!")
    .max(50, "Too Long!")
    .required("Role name is required."),
  authorizations: Yup.array()
  .required('Please provide at least one authorization.')
});

const RoleForm = () => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(true);
  const [open, setOpen] = React.useState(false);

  const [errors, setErrors] = React.useState(false);

  const [showAlert, setShowAlert] = React.useState(true);

  const history = useHistory();

  const { enqueueSnackbar } = useSnackbar();


//   const [authorizations, setAuthorizations] = React.useState([]);

  const handleAuthChange = (e, resourceName, currentValue, setFieldValue) => {
    let authorizations = currentValue;
    let resourceId = e.target.name;
    let resourceAction = e.target.value;

    let x = {
        id: resourceId,
        name: resourceName,
        actions: [`${resourceAction}`]
    }

    let p = authorizations.findIndex(item => resourceId === item.id);

    if(p > -1) {
        let actions = authorizations[p].actions;
        const index = actions.indexOf(resourceAction);

        if(index === -1) {
            actions.push(resourceAction)
        } else {
            if(e.target.checked === false) {
                actions.splice(index, 1);
            }
        }

        if(actions.length <= 0) {
          authorizations.splice(p, 1);
        }


    } else {
        authorizations.push(x);
    }

   setFieldValue("authorizations", authorizations)
}



  return (

    <Card style={{ maxWidth: "600px" }}>
      <Formik
        initialValues={{
          name: "",
          //   email: '',
          //  age: '',
          //  position: '',
          // checked: false,
          //  multiline: 'default value',
          authorizations: [],
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
          isSubmitting,
          setFieldValue
        }) => (
           
          <Form noValidate autoComplete="off">
            <CardHeader
              subheader="User role to manage the system"
              title="Role"
            />
            <Divider />
            <CardContent>
              <Grid container spacing={3}>
                <Grid item md={6} xs={12}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      fullWidth
                      name="name"
                      label="Name"
                      value={values.name}
                      helperText={errors ? errors.name : ""}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      error={
                        errors && errors.name && touched.name ? true : null
                      }
                    />
                  </FormControl>
                </Grid>

                <Grid item xs={12}>
                  <TableContainer component={Paper}>
                    <Table
                      className={classes.table}
                      size="small"
                      aria-label="a dense table"
                    >
                     
                        <caption>{ errors.authorizations }</caption>
                     
                      <TableHead>
                        <TableRow>
                          <TableCell>Resource</TableCell>
                          <TableCell align="left">Authorazie Actions</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {resources.map((resource, resource_index) => (
                          <TableRow key={resource_index} hover>
                            <TableCell component="th" scope="row">
                              <p>{resource.name}</p>
                            </TableCell>

                            <TableCell align="left">
                            {resource.actions.map((action, index) => (
                                <FormControlLabel
                                  key={index}
                                  control={
                                    <Checkbox
                                      value={action}
                                      onChange={(e) => handleAuthChange(e, resource.name, values.authorizations, setFieldValue)}
                                      name={resource.id}
                                      color="primary"
                                      size="small"
                                    />
                                  }
                                  label={action.toUpperCase()}
                                />
                              ))}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </Grid>
              </Grid>
            </CardContent>
            <Divider />
            <CardActions>
              <Grid container spacing={3}>
                <Grid item xs={12}>
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
                </Grid>
                <Grid item xs={12}>
                  <Flash flash={{ type: "info", msg: "Hello" }} />
                </Grid>
              </Grid>
            </CardActions>
          </Form>
        )}
      </Formik>
    </Card>
  );
};

export default RoleForm;
