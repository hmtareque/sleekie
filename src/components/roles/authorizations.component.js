import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import Badge from "@material-ui/core/Badge";
import Chip from "@material-ui/core/Chip";
import AddIcon from "@material-ui/icons/Add";
import EditIcon from "@material-ui/icons/Edit";
import VisibilityIcon from "@material-ui/icons/Visibility";
import DeleteIcon from "@material-ui/icons/Delete";

import { green } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "left",
    flexWrap: "wrap",
    "& > *": {
      margin: theme.spacing(0.5),
    },
  },
  table: {
    minWidth: 600,
  },
}));

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const color = {
    create: "primary",
    delete: "secondary"
}


const icon = {
    create: <AddIcon />,
    update: <EditIcon />,
    read: <VisibilityIcon />,
    delete: <DeleteIcon />
}

export default function DenseTable({ authorizations }) {
  const classes = useStyles();

  console.log(authorizations);

  if (authorizations) {
    return (
      <TableContainer component={Paper}>
        <Table
          className={classes.table}
          size="small"
          aria-label="a dense table"
        >
          <TableHead>
            <TableRow>
              <TableCell>Resource</TableCell>
              <TableCell align="left">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {authorizations.map((resource, resourceIndex) => (
              <TableRow key={resourceIndex}>
                <TableCell component="th" scope="row">
                  {resource.name}
                </TableCell>

                <TableCell align="left">
                  <div className={classes.root}>
                    {resource.actions.map((action, action_index) => (
                     
                          <Chip
                            key={action_index}
                            label={action.toUpperCase()}
                            color={ color[action] ? color[action] : "default" }
                            icon={ icon[action] }
                            variant="outlined"
                            size="small"
                          />
                    ))}
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }

  return false;
}
