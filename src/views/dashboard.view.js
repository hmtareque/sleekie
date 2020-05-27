import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';


const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(4)
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className="">
      
     
        <Grid xs={12} md={8}>
          <h3>Hasan Tareque</h3>

    <Card><p>Dashboard</p></Card>
         
        </Grid>
    
    </div>
  );
};

export default Dashboard;
