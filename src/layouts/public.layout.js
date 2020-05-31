import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const PublicLayout = props => {
  
  const { children } = props;
  const title = children.props.title;

  console.log(children.props.title);
  
  const classes = useStyles();

  return (
    <div>
      <CssBaseline />
      {children}
    </div>
  );
};

export default PublicLayout;
