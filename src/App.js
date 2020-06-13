import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes/routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';

import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const browserHistory = createBrowserHistory();

  // add action to all snackbars
  const notistackRef = React.createRef();
  const onClickDismiss = key => () => { 
      notistackRef.current.closeSnackbar(key);
  }

export default class App extends Component {




  render() {
    return (
      <SnackbarProvider maxSnack={3}

      ref={notistackRef}
      anchorOrigin={{
        vertical: 'bottom',
        horizontal: 'right',
    }}
    action={(key) => (
        <IconButton onClick={onClickDismiss(key)}><CloseIcon fontSize="small" style={{color: 'white' }}/></IconButton>
    )}>
        <ThemeProvider theme={theme}>
          <Router history={browserHistory}>
            <Routes />
          </Router>
        </ThemeProvider>
      </SnackbarProvider>
    );
  }
}

