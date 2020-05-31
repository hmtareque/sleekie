import React from 'react';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';

import {Animated} from "react-animated-css";

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },

  appName: {
    color: 'white',
    padding: '8px 5px',
    width: '200px',
    fontWeight: 'bold',
    fontSize: '1.25rem'

  },

  hide: {
    display: 'none',
  },
  show: {
      display: 'block'
  }
});

const AppName = ({ open }) => {
  const classes = useStyles();
  return (
    

 <Typography className={clsx(classes.appName, !open && classes.hide)} variant="span" noWrap>
         
          <Animated animationIn="flipInY" animationOut="flipOutX" animationInDuration={2000} animationOutDuration={2000} isVisible={ open }>
    Hasan Tareque
</Animated>
        </Typography> 
  );
}

export default AppName;


