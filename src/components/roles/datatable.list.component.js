import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import TextField from "@material-ui/core/TextField";
import Switch from "@material-ui/core/Switch";
import MUIDataTable from "mui-datatables";

import Chip from "@material-ui/core/Chip";
import FaceIcon from "@material-ui/icons/Face";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";

import { useSnackbar } from "notistack";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  chip: {
    // border: `1px solid ${theme.palette.primary.main}`,
    "&:hover": {
      backgroundColor: theme.palette.info.light,
      // color: theme.palette.grey[50],
      cursor: "pointer",
    },
  },
}));

const Example = () => {

  const classes = useStyles();

  const [open, setOpen] = React.useState(false);
  const [role, setRole] = React.useState({id: "", name: ""});

  const [activate, setActivate] = React.useState();


  const [title, setTitle] = React.useState('List of Roles');

  const { enqueueSnackbar } = useSnackbar();

  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    console.log('render');

    if(open === false) {
      axios
      .get("http://localhost:3001/roles")
      .then((response) => {

        setData(response.data);

        console.log('yes')

      })
      .catch((error) => {
        console.log(error);
      });
    }

        

         
  }, [role]);




  const handleRoleActivation = () => {

  //  console.log(activating)


    axios
    .put(`http://localhost:3001/roles/${role.id}/activate`, {
      active: !activate
    })
    .then((response) => {
      
      enqueueSnackbar(
        `Successfully ${activate ? 'deactivated' : 'activated'} role ${role.name}.`,
        {
          variant: "success",
        }
      );
      
      setRole({id: "", name: ""});

    })
    .catch(function (error) {
      console.log(error.response.data);
      enqueueSnackbar(`Internal server error.${new Date().getTime()}`, {
        variant: "error",
      });
    });

   setOpen(false);
   

    
  };

  const handleClose = () => {
    setOpen(false);
  };

  const columns = [
    {
      name: "_id",
      label: "Role",
      options: {
        display: "false",
      },
    },
    {
      name: "name",
      label: "Role",
      options: {
        filter: false,
        customBodyRender: (value, tableMeta) => (
          <Chip
            className={classes.chip}
            variant="outlined"
            icon={<FaceIcon />}
            label={value}
            component={Link}
            to={`/auth/roles/${tableMeta.rowData[0]}`}
          />
        ),
      },
    },
    {
      name: "created_at",
      label: "Created At",
      options: {
        filter: true,
      },
    },
    {
      name: "updated_at",
      label: "Updated At",
      options: {
        filter: true,
        customBodyRender: (value) => {
          return <div>{value ? value : "never"}</div>;
        },
      },
    },
    {
      name: "active",
      label: "Active",
      options: {
        filter: true,
        customBodyRender: (value, tableMeta, updateValue) => {
          return (
            <FormControlLabel
              label={value ? "Yes" : "No"}
              value={value ? "Yes" : "No"}
              control={
                <Switch color="primary" checked={value} value={value ? "Yes" : "No"} />
              }
              onChange={event => {

             //   updateValue(event.target.value === "Yes" ? false : true);

                     

  //               console.log(event.target.value)
  //               console.log(!value)

  //            //   setOpen(true)

  setActivate(value);
  setRole({id: tableMeta.rowData[0], name: tableMeta.rowData[1]});
  setOpen(true)

              }}
            />
          );
        },
      },
    },
  ];


               

  

  const options = {
    filter: true,
    filterType: "dropdown",
    responsive: "standard",
    // onRowClick: (rowData, rowMeta) => {
    //   console.log(rowData[0])
    // },
    selectableRows: "none",
    rowsPerPage: 5,
    rowsPerPageOptions: [5, 10, 15, 25, 50, 100],
  };

  return (
    <div>
      <MUIDataTable
        title={title}
        data={data}
        columns={columns}
        options={options}
      />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {activate ? "Deactivate" : "Activate"} Role
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Are you sure to {activate ? "deactivate" : "activate"}{" "}
            {role.name} role?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleRoleActivation} color="primary" autoFocus>
            {activate ? "Deactivate" : "Activate"}
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default Example;
