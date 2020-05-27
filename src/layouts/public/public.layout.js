import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Footer from './components/footer.component';

const useStyles = makeStyles(theme => ({
  root: {}
}));

const PublicLayout = props => {
  
  const { children } = props;
  const title = children.props.title;

  console.log(children.props.title);
  
  const classes = useStyles();

  return (
    <div >
      <CssBaseline />
      <main>
          {children}
          <Footer />
      </main>
    </div>
  );
};

export default PublicLayout;
