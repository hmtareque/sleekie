import React from 'react';
import Dashboard from './components/Dashboard';
import Table from './components/Table';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { SnackbarProvider, useSnackbar } from 'notistack';

function App() {
  return (
    
    <Switch>
      <Route path="/" component={Dashboard} exact />
      <Route path="/table" component={Table} exact />
                
    </Switch>
  );
}


export default App;
