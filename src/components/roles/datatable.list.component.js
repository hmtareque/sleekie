import React from "react";
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import MUIDataTable from "mui-datatables";

import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';

const useStyles = makeStyles((theme) => ({
  chip: {
   // border: `1px solid ${theme.palette.primary.main}`,
    '&:hover': {
      backgroundColor: theme.palette.info.light,
     // color: theme.palette.grey[50],
      cursor: 'pointer'
    }
  }
}));

const Example = ({ data }) => {

  const classes = useStyles();

    const columns = [
      {
        name: "_id",
        label: "Role",
        options: {
          display: 'false'
        }
      },
      {
        name: "name",
        label: "Role",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta ) => (
         

          <Chip
          className={classes.chip}
          variant="outlined"
          icon={<FaceIcon />}
        label={ value }
        component={Link}
        to={`/auth/roles/${tableMeta.rowData[0]}`}
      />

          )
        }
      },
      {
        name: "created_at",
        label: "Created At",
        options: {
          filter: true,
        }
      },
      {
        name: "updated_at",
        label: "Updated At",
        options: {
          filter: true,
          customBodyRender: (value) => {
            return (
              <div>Cities</div>
            );
          },
        }
      },
      {
        name: "status",
        label: "Active",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {

            return (
              <FormControlLabel
                label={value === "active" ? "Yes" : "No"}
                value={value === "active" ? "Yes" : "No"}
                control={
                  <Switch color="primary" checked={value} value={value ? "Yes" : "No"} />
                }
                onChange={event => {
                  updateValue(event.target.value === "Yes" ? false : true);
                }}
              />
            );

          }
        }
      }
    ];

    const table_data = data;

    console.log(data);

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      // onRowClick: (rowData, rowMeta) => {
      //   console.log(rowData[0])
      // },
      selectableRows: 'none',
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 15, 25, 50, 100]
    };

    return (
      <MUIDataTable title={"Example"} data={table_data} columns={columns} options={options} />
    );

  }


export default Example;
