import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Chip from '@material-ui/core/Chip';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
    '& > *': {
      margin: theme.spacing(0.5),
    },
  },
  table: {
    minWidth: 650,
  },
}));

const SimpleTable = ({ data }) => {
  const classes = useStyles();

  console.log(data);


  return (
    <div>
    <TableContainer component={Paper}>

<h3>test</h3>



      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="right">Resources</TableCell>
            <TableCell align="right">Status</TableCell>
            <TableCell align="right">Created At</TableCell>
            <TableCell align="right">Updated At</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                <Link to={`/auth/roles/${row._id}`}>{row.name}</Link>
              </TableCell>
              <TableCell align="right">
                <div className={classes.root}>
                  {row.authorizations.map(item => (
                    <Chip label={item.name} variant="outlined" />
                  ))}
               
             
                </div>
              
              </TableCell>
              <TableCell align="right">{row.status}</TableCell>
              <TableCell align="right">{row.created_at}</TableCell>
              <TableCell align="right">{row.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </div>
  );
}

export default SimpleTable;
