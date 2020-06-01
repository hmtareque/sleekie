import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const Help = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          <h3>Help</h3>
      
    </div>
  );
};

export default Help;
