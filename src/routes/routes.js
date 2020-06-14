import React from 'react';
import { Switch, Redirect } from 'react-router-dom';

import RouteWithLayout from '../components/layouts/layout.component';

import PublicRoute from '../routes/public.route';
import ProtectedRoute from '../routes/protected.route';

import PrivateLayout from '../layouts/private.layout';
import PublicLayout from '../layouts/public.layout';

//import Dashboard from './views/dashboard.view';
import Customers from '../views/customers.view';
import SignupForm from '../views/form.view';
import RecipeReviewCard from '../views/test.view';

// tables 
import SimpleTable from '../views/tables/simple.table';
import EnhancedTable from '../views/tables/enhanced.table';
import DenseTable from '../views/tables/dense.table';
import FixHeadTable from '../views/tables/fix-head.table';
import MaterialTable from '../views/tables/material.table';

import SignIn from '../views/auth/sign-in.view';
import SignInSide from '../views/auth/sign-in-side.view';
import ForgotPassword from '../views/auth/reset-password.view';

import Help from '../views/help.view';
import NotFound from '../views/errors/404';
import DashboardOne from '../views/dashboards/dashboard-one.view';
import DashboardTwo from '../views/dashboards/dashboard-two.view';

/* Roles */
import ListofRoles from '../views/auth/roles/index';
import CreateRole from '../views/auth/roles/create';
import EditRole from '../views/auth/roles/edit';
import ShowRole from '../views/auth/roles/show';

/* Users */
import ListofUsers from '../views/auth/users/index';
import CreateUser from '../views/auth/users/create';
import EditUser from '../views/auth/users/edit';
import ShowUser from '../views/auth/users/show';

const Routes = () => {
  return (
    <Switch>

      <Redirect exact from="/" to="/dashboards/one" />

      <ProtectedRoute exact path="/dashboards/one" title="Dashboard One" component={DashboardOne} layout={PrivateLayout} />
      <ProtectedRoute exact path="/dashboards/two" title="Dashboard Two" component={DashboardTwo} layout={PrivateLayout} />

      <ProtectedRoute exact path="/tables/simple" title="Simple" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/simple" title="Simple" component={SimpleTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/tables/simple" title="Simple" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/enhanced" title="Enhanced" component={EnhancedTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/dense" title="Dense" component={DenseTable}  layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/fix-head" title="Fixed Head" component={FixHeadTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/material" title="Material" component={MaterialTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/tables/pivot" title="Pivot Table" component={MaterialTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/maps/google" title="Google Map" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/maps/vector" title="Vector Map" component={SimpleTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/charts/d3" title="D3" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/charts/nivo" title="Nivo" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/charts/victory" title="Victory" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/charts/recharts" title="Recharts" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/charts/chartjs" title="Chartjs" component={SimpleTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/calendar" title="Calendar" component={SimpleTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/register" title="Register" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/forget-password" title="Forgot Password" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/reset-password" title="Reset Password" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/sign-in" title="Sign In" component={SimpleTable} layout={PrivateLayout} />
      <ProtectedRoute exact path="/side-sign-in" title="Side Sign In" component={SimpleTable} layout={PrivateLayout} />

      <ProtectedRoute exact path="/auth/roles" title="Roles" component={ListofRoles} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/roles/create" title="Create New Role" component={CreateRole} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/roles/:role_id" title="Role" component={ShowRole} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/roles/:role_id/edit" title="Edit Role" component={EditRole} layout={PrivateLayout} />
      
      <ProtectedRoute exact path="/auth/users" title="users" component={ListofUsers} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/users/create" title="Create New user" component={CreateUser} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/users/:user_id" title="user" component={ShowUser} layout={PrivateLayout} />
      <ProtectedRoute exact path="/auth/users/:user_id/edit" title="Edit user" component={EditUser} layout={PrivateLayout} />
      
      <Redirect to="/not-found" />

    </Switch>
  );
};

export default Routes;
