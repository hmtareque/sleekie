import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from './components/layouts/layout.component';

import PrivateLayout from './layouts/private.layout';
import PublicLayout from './layouts/public.layout';

import Dashboard from './views/dashboard.view';
import Customers from './views/customers.view';
import SignupForm from './views/form.view';
import RecipeReviewCard from './views/test.view';

// tables 
import SimpleTable from './views/tables/simple.table';
import EnhancedTable from './views/tables/enhanced.table';
import DenseTable from './views/tables/dense.table';
import FixHeadTable from './views/tables/fix-head.table';
import MaterialTable from './views/tables/material.table';

import SignIn from './views/auth/sign-in.view';
import SignInSide from './views/auth/sign-in-side.view';
import ForgotPassword from './views/auth/reset-password.view';

import Help from './views/help.view';
import NotFound from './views/errors/404';

const Routes = () => {
  return (
    <Switch>
      <Redirect
        exact
        from="/"
        to="/dashboard"
      />
      <RouteWithLayout
      title="Dashboard"
        component={Dashboard}
        exact
        layout={PrivateLayout}
        path="/dashboard"
      />
      <RouteWithLayout
      title="Customers"
        component={Customers}
        exact
        layout={PrivateLayout}
        path="/customers"
      />
      <RouteWithLayout
      title="Sign Up Form"
        component={SignupForm}
        exact
        layout={PrivateLayout}
        path="/form"
      />
      <RouteWithLayout
        title="Card"
        component={RecipeReviewCard}
        exact
        layout={PrivateLayout}
        path="/card"
      />

<RouteWithLayout title="Simple" component={SimpleTable} exact layout={PrivateLayout} path="/tables/simple" />
<RouteWithLayout title="Enhanced" component={EnhancedTable} exact layout={PrivateLayout} path="/tables/enhanced" />
<RouteWithLayout title="Dense" component={DenseTable} exact layout={PrivateLayout} path="/tables/dense" />
<RouteWithLayout title="Fixed Head" component={FixHeadTable} exact layout={PrivateLayout} path="/tables/fix-head" />
<RouteWithLayout title="Material" component={MaterialTable} exact layout={PrivateLayout} path="/tables/material" />


<RouteWithLayout title="Charts" component={MaterialTable} exact layout={PrivateLayout} path="/charts" />
<RouteWithLayout title="Calendar" component={Dashboard} exact layout={PrivateLayout} path="/calendar" />

      <RouteWithLayout title="Help" component={Help} exact layout={PrivateLayout} path="/help" />
      
      
      <RouteWithLayout
        title="Sign In"
        component={SignIn}
        exact
        layout={PublicLayout}
        path="/login"
      />

      <RouteWithLayout
        title="Forgot Password"
        component={ForgotPassword}
        exact
        layout={PublicLayout}
        path="/reset-password"
      />

      <RouteWithLayout
        title="Sign In Side"
        component={SignInSide}
        exact
        layout={PublicLayout}
        path="/sign-in-side"
      />

<RouteWithLayout
        title="Sign In Side"
        component={NotFound}
        exact
        layout={PrivateLayout}
        path="/not-found"
      />

      <Redirect to="/not-found" />

      
    </Switch>
  );
};

export default Routes;
