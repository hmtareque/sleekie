import React from 'react';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const DashboardOne = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      
          <h3>Dashboard One</h3>
      
    </div>
  );
};

export default DashboardOne;
