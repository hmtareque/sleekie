import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const DashboardTwo = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          <h3>Dashboard Two</h3>
      
    </div>
  );
};

export default DashboardTwo;
