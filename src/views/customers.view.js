import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
   // padding: theme.spacing(4)
  }
}));

const Customers = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper style={{padding: '16px'}}>
      
          <h1>Customers</h1>
       
      </Paper>
    </div>
  );
};

export default Customers;
