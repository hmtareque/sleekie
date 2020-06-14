import React from "react";
import { Formik, Form } from "formik";
import axios from "axios";
import * as Yup from "yup";

import { makeStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import CircularProgress from "@material-ui/core/CircularProgress";
import Paper from "@material-ui/core/Paper";
import EditIcon from '@material-ui/icons/Edit';

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

import { useSnackbar } from "notistack";

import { resources } from "../../config/resources";

import { useHistory } from 'react-router-dom';

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

  buttonProgress: {
    color: green[500],
    position: "absolute",
    top: "50%",
    left: "50%",
    marginTop: -12,
    marginLeft: -12,
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
  authorizations: Yup.array().required(
    "Please provide at least one authorization."
  ),
});

const RoleForm = ({ data }) => {
  const classes = useStyles();
  const [loading, setLoading] = React.useState(false);
  const [success, setSuccess] = React.useState(true);

  const history = useHistory();


  const role = data.role;
  const auth = data.auth;

  //console.log(role.name);
  //console.log(auth)

  const t = {
    name: role.name,
    authorizations: role.authorizations,
  };

  const { enqueueSnackbar } = useSnackbar();

  const handleAuthChange = (e, resourceName, currentValue, setFieldValue) => {

    e.preventDefault();

    let authorizations = currentValue;
    let resourceId = e.target.name;
    let resourceAction = e.target.value;

    console.log(e.target.checked);

    let x = {
      id: resourceId,
      name: resourceName,
      actions: [`${resourceAction}`],
    };

    let p = authorizations.findIndex((item) => resourceId === item.id);

    if (p > -1) {
      let actions = authorizations[p].actions;
      const index = actions.indexOf(resourceAction);

      if (index === -1) {
        actions.push(resourceAction);
      } else {
        if (e.target.checked === false) {
          actions.splice(index, 1);
        }
      }

      if (actions.length <= 0) {
        authorizations.splice(p, 1);
      }

    } else {
      authorizations.push(x);
    }

    setFieldValue("authorizations", authorizations);

    console.log(authorizations);


  };

  return (
    <Card style={{ maxWidth: "600px" }}>
      <Formik
        initialValues={t}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {

          setSuccess(false);
          setLoading(true);

          axios
            .put(`http://localhost:3001/roles/${role._id}`, values)
            .then((response) => {

              setSuccess(true);
              setLoading(false);
              actions.setSubmitting(false);

              enqueueSnackbar(
                `Successfully updated ${response.data.role.name} role.`,
                {
                  variant: "success",
                }
              );


              history.push(`/auth/roles/${response.data.role._id}`);

            })
            .catch(function (error) {
              console.log(error.response.data);

              actions.setSubmitting(false);
              setLoading(false);

              enqueueSnackbar(`Internal server error.${new Date().getTime()}`, {
                variant: "error",
              });

              
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
          setFieldValue,
        }) => (
          <Form noValidate autoComplete="off">
            <CardHeader
              subheader="User role to manage the system"
              title="Update Role"
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
                      <caption>{errors.authorizations}</caption>

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
                                      checked={
                                        (values.authorizations.find(
                                          (item) => item.id === resource.id
                                        ) &&
                                        values.authorizations
                                          .find(
                                            (item) => item.id === resource.id
                                          )
                                          .actions.indexOf(action) > -1) ? true : false
                                      }
                                      value={action}
                                      onChange={(e) =>
                                        handleAuthChange(
                                          e,
                                          resource.name,
                                          values.authorizations,
                                          setFieldValue
                                        )
                                      }
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
              <div className={classes.wrapper}>
                <Button
                  color="primary"
                  size="large"
                  variant="outlined"
                  disabled={loading}
                  onClick={handleSubmit}
                  //  className={classes.submitButton}
                  startIcon={<EditIcon />}
                >
                  {loading ? "Updating ..." : "Update"}
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

export default RoleForm;
