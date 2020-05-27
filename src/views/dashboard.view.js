import React from 'react';
import { makeStyles } from '@material-ui/styles';
import { Grid } from '@material-ui/core';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';

import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import AlarmIcon from '@material-ui/icons/Alarm';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PersonAddTwoToneIcon from '@material-ui/icons/PersonAddTwoTone';
import PersonAddOutlinedIcon from '@material-ui/icons/PersonAddOutlined';

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';


const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(2),
    '&:hover': {
      color: theme.palette.grey[50],
      backgroundColor: theme.palette.info.dark,
    }
  }
}));

const Dashboard = () => {
  const classes = useStyles();

  return (
    <div className="">




        <Grid xs={12} md={8}>


          <h3>Hasan Tareque</h3>

          <div>
      <Button
        variant="outlined"
        color="primary"
        className={classes.button}
        startIcon={<PersonAddOutlinedIcon />}
      >
        New Customer
      </Button>
    </div>

    <Card><p>Dashboard</p></Card>
         
        </Grid>
    
    </div>
  );
};

export default Dashboard;
