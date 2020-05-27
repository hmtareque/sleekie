import React from 'react';
import clsx from 'clsx';
import {fade, makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import SendIcon from '@material-ui/icons/Send';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import StarBorder from '@material-ui/icons/StarBorder';

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BarChartIcon from '@material-ui/icons/BarChart';

import { blue } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 240,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(3),
    backgroundColor: fade(theme.palette.grey[200], 0.4),
  },

  item: {
    color: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: fade(theme.palette.info.light, 0.3),
    }
  },

  iconSpace: {
    minWidth: '30px',
  },

  openIconSpace: {
    minWidth: '42px',
  },

  hide: {
      display: 'none'
  },
  block: {
    display: 'block'
  },
  active: {
    fontWeight: 600,
    backgroundColor: fade(theme.palette.info.light, 0.3),
  }
}));

export default function PrimaryList({ more }){
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const currentLocation = window.location.pathname; 

  const handleClick = () => {
    setOpen(!open);
  };

  const list = [
    {name : 'Dashboard', 'path': '/dashboard', icon: <DashboardIcon color="primary" />},
    {name : 'Transactions', 'path': '/transactions', icon: <BarChartIcon color="primary" />},
    {name : 'Customers', 'path': '/customers', icon: <PeopleOutlineIcon color="primary" />},
    {name : 'Cards', 'path': '/card', icon: <PeopleOutlineIcon color="primary" />},
    {name : 'Sign Up', 'path': '/form', icon: <PeopleOutlineIcon color="primary" />},
  ];

  return (
    <List
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader" className={more ? classes.block : classes.hide}>
          Nested List Items {currentLocation}
        </ListSubheader>
      }
      className={classes.root}
    >



{list.map((item, index) => {

return <ListItem button component={Link} to={item.path} key={index} className={clsx(classes.item, (item.path === currentLocation) && classes.active)} size="small">
<ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
<Tooltip title={item.name} placement="right-start" >{item.icon}</Tooltip>
</ListItemIcon>
<ListItemText primary={item.name} color="primary"/>
</ListItem>

})}


      

      

      <ListItem button onClick={handleClick}>
        <ListItemIcon>
          <InboxIcon />
        </ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open && more} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItem button className={classes.nested}>
            <ListItemIcon>
              <StarBorder />
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItem>
        </List>
      </Collapse>
    </List>
  );
}
