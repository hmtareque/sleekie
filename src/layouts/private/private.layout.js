import React, { useState } from 'react';
import { makeStyles } from '@material-ui/styles';

import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import Topbar from './components/topbar.component';
import Sidebar from './components/sidebar.component';
import Footer from './components/footer.component';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  }
}));

const PrivateLayout = props => {
  
  const { children } = props;
  const title = children.props.title;

  console.log(children.props.title);
  
  const classes = useStyles();
  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Topbar title={title} onSidebarOpen={openSidebar} />
      <Sidebar
        appName="App"
        onOpen={handleSidebarOpen}
        onClose={handleSidebarClose}
        open={openSidebar}
      />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          {children}
          <Footer />
        </Container>
      </main>
    </div>
  );
};

export default PrivateLayout;
