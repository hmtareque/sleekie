import React, { Component } from 'react';
import { Router } from 'react-router-dom';
import Routes from './routes';
import { ThemeProvider } from '@material-ui/styles';
import theme from './theme';
import { createBrowserHistory } from 'history';
import { SnackbarProvider } from 'notistack';

const browserHistory = createBrowserHistory();



export default class App extends Component {
  render() {
    return (
      <SnackbarProvider maxSnack={3}>
      <ThemeProvider theme={theme}>
      <Router history={browserHistory}>
          <Routes />
        </Router>
        </ThemeProvider>
        </SnackbarProvider>
    );
  }
}

