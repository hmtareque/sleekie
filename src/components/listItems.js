import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import Tooltip from '@material-ui/core/Tooltip';
import { fade, makeStyles } from '@material-ui/core/styles';

import { Link } from 'react-router-dom';


import { styled } from '@material-ui/core/styles';

const MainListItem = styled(ListItem)({
  paddingLeft: '24px',
});

const DrawerListItemIcon = styled(ListItemIcon)({
  color: 'rgba(0, 0, 0, 0.54)',
    display: 'inline-flex',
    minWidth: '48px',
    flexShrink: 0,
});


const list = [
  {name : 'Dashboard', 'path': '/', icon: <ShoppingCartIcon />},
  {name : 'Orders', 'path': '/form', icon: <PeopleIcon />},
  {name : 'Customers', 'path': '/table', icon: <LayersIcon />},
  {name : 'Reports', 'path': 'link', icon: <BarChartIcon />},
];

export const mainListItems = (
  <React.Fragment>
    {list.map((item, index) => {
      return <MainListItem key={index} button>
        <Link to={item.path}>
      <DrawerListItemIcon>
      <Tooltip title={item.name} placement="right-start">{item.icon}</Tooltip>
      </DrawerListItemIcon>
      </Link>
      
      <ListItemText primary={item.name} />
    </MainListItem>
    })}
  </React.Fragment>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);