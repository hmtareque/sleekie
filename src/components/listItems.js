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


import { styled } from '@material-ui/core/styles';

const MainListItem = styled(ListItem)({
  paddingLeft: '24px',
});


const list = [
  {name : 'Dashboard', 'link': 'link', icon: <ShoppingCartIcon color="primary"/>},
  {name : 'Orders', 'link': 'link', icon: <PeopleIcon />},
  {name : 'Customers', 'link': 'link', icon: <LayersIcon />},
  {name : 'Reports', 'link': 'link', icon: <BarChartIcon />},
];

export const mainListItems = (
  <React.Fragment>
    {list.map((item, index) => {
      return <MainListItem key={index} button>
        
      <ListItemIcon>
      <Tooltip title={item.name} placement="right-start">{item.icon}</Tooltip>
      </ListItemIcon>
      
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