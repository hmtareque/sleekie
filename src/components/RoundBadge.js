import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.info.dark,
    color: theme.palette.grey[50],
    width: '25px', 
    height: '25px',
    padding: '3px 0px',
    borderRadius: '12px',
    textAlign: 'center',
    fontSize: '0.8rem',
  }
}));

const RoundBadge = ({ info }) => {
  const classes = useStyles();
  return (
  <span className={classes.root}>{ info }</span>
  );
}

export default RoundBadge;