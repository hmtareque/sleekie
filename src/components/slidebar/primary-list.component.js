import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
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

import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import TocIcon from '@material-ui/icons/Toc';

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleOutlineIcon from '@material-ui/icons/PeopleOutline';
import BarChartIcon from '@material-ui/icons/BarChart';
import PeopleIcon from '@material-ui/icons/People';
import PostAddIcon from '@material-ui/icons/PostAdd';
import TableChartIcon from '@material-ui/icons/TableChart';
import EventIcon from '@material-ui/icons/Event';
import PagesIcon from '@material-ui/icons/Pages';
import LockIcon from '@material-ui/icons/Lock';
import WebIcon from '@material-ui/icons/Web';
import WidgetsIcon from '@material-ui/icons/Widgets';
import MapIcon from '@material-ui/icons/Map';
import InsertChartIcon from '@material-ui/icons/InsertChart';
import SupervisorAccountIcon from '@material-ui/icons/SupervisorAccount';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Badge from '@material-ui/core/Badge';

import { blueGrey, blue } from '@material-ui/core/colors';
import RoundBadge from '../RoundBadge';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 260,
    //  backgroundColor: blueGrey[900],
    //backgroundColor: fade(theme.palette.mustard, 0.8),
    //background: 'linear-gradient(45deg, #ffffff 30%, #000000 90%)',
  },
  nested: {
    //  paddingLeft: theme.spacing(7),
    padding: 0,
    margin: 0,
    // backgroundColor: fade(theme.palette.grey[200], 0.4),
    //paddingTop: '4px',
    //paddingBottom: '4px',

    //  marginLeft: '32px',
    //  borderLeft: '2px solid rgba(50, 60, 93, 1)',
    backgroundColor: fade('#000000', 0.6),

    '&:hover': {
      backgroundColor: fade('#000000', 0.9),
    }

  },

  nestedText: {
    paddingLeft: '20px',
    // paddingTop: '6px',
    // paddingBottom: '6px',
    // backgroundColor: fade(theme.palette.grey[200], 0.4),
    //paddingTop: '4px',
    //paddingBottom: '4px',
    fontSize: '1rem',
    //  marginLeft: '-16px',
    borderLeft: '2px solid rgba(50, 60, 93, 1)',
    backgroundColor: fade('#000000', 0.2),
    lineHeight: '32px',
    margin: 0,
    paddingTop: '4px',
    paddingBottom: '4px',

    '&:hover': {
      // color: 'white',
    }
  },

  nestedIcon: {
    color: 'rgba(50, 60, 93, 1)',
    //  marginLeft: '-25px', 
    width: '16px',
    // margin: 0,
    marginRight: '-16px',
    marginLeft: '25px',
    //  paddingLeft: '24px',
    //  paddingRight: '24px',

  },

  collapse: {
    backgroundColor: fade('#000000', 0.1),
  },

  item: {
    paddingTop: '4px',
    paddingBottom: '4px',
    // fontSize: '16px',
    // fontWeight: '500',

    fontWeight: 500,
    fontFamily: ["Heebo", "sans-serif"].join(','),
    fontSize: '1rem',
    // color: theme.palette.dark,
    paddingLeft: theme.spacing(2.5),
    '&:hover': {
      // fontWeight: 600,
      //backgroundColor: fade(theme.palette.mustard, 0.4),
      //  color: theme.palette.black,

      transform: 'shewY(45deg)'
    },

    '&:after': {
      transform: 'shewY(45deg)'
    }
  },

  icon: {
    color: theme.palette.success.main,
  },

  iconSpace: {
    minWidth: '32px',
  },

  openIconSpace: {
    minWidth: '48px',
  },

  hide: {
    display: 'none'
  },
  block: {
    display: 'block',
    color: '#dddddd',
    backgroundColor: fade('rgba(37, 48, 83, 1)', 0.9),
    fontSize: '0.8rem',
    paddingTop: '0px',
    paddingBottom: '0px',

  },
  active: {
    // fontWeight: 600,
    // color: blue[800],
    // backgroundColor: fade(theme.palette.dark, 0.1),

  },
}));

export default function PrimaryList({ more }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const currentLocation = window.location.pathname;

  const handleClick = () => {
    setOpen(!open);
  };

  const list = [
    { name: 'Dashboard', 'path': '/dashboard', icon: <DashboardIcon className={classes.icon} /> },
    { name: 'Pages', 'path': '/customers', icon: <PeopleIcon className={classes.icon} /> },
    { name: 'Cards', 'path': '/card', icon: <PeopleOutlineIcon className={classes.icon} />, badge: <RoundBadge info={'5'} /> },
    { name: 'Sign Up', 'path': '/form', icon: <PeopleOutlineIcon className={classes.icon} /> },
  ];

  const tables = [
    { name: 'Simple', 'path': '/tables/simple', icon: <DashboardIcon className={classes.icon} /> },
    { name: 'Fix Head', 'path': '/tables/fix-head', icon: <BarChartIcon className={classes.icon} /> },
    { name: 'Enhanced', 'path': '/tables/enhanced', icon: <PeopleOutlineIcon className={classes.icon} /> },
    { name: 'Dense', 'path': '/tables/dense', icon: <PeopleOutlineIcon className={classes.icon} /> },
    { name: 'Material', 'path': '/tables/material', icon: <PeopleOutlineIcon className={classes.icon} /> },
  ];

  const forms = [
    { name: 'Simple', 'path': '/tables/simple', icon: <DashboardIcon /> },
    { name: 'Fix Head', 'path': '/tables/fix-head', icon: <BarChartIcon /> },
    { name: 'Enhanced', 'path': '/tables/enhanced', icon: <PeopleOutlineIcon /> },
    { name: 'Dense', 'path': '/tables/dense', icon: <PeopleOutlineIcon /> },
    { name: 'Material', 'path': '/tables/material', icon: <PeopleOutlineIcon /> },
  ];

  const maps = [
    { name: 'Google', 'path': '/tables/simple', icon: <DashboardIcon /> },
    { name: 'Vector', 'path': '/tables/fix-head', icon: <BarChartIcon /> },
  ];

  const auth = [
    { name: 'Sign In', 'path': '/login' },
    { name: 'Sign In by Side', 'path': '/tables/fix-head' },
  ];

  const renderList = ( list ) => {
 return <List component="div" disablePadding>
          {list.map((item, index) => {
            return <ListItem button component={Link} to={item.path} className={clsx(classes.nested)}>
              <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
                <FiberManualRecordIcon className={classes.nestedIcon} />
              </ListItemIcon>
              <ListItemText primary={item.name} disableTypography={true} className={classes.nestedText} />
            </ListItem>
          })}
        </List>
  }

  return (
    <List
      component="div" disablePadding
    //  aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="span" id="nested-list-subheader" className={more ? classes.block : classes.hide}>
            MAIN NAVIGATION
          </ListSubheader>
        }
      className={classes.root}
    >

      {list.map((item, index) => {
        return <ListItem button component={Link} to={item.path} key={index} className={clsx(classes.item, (item.path === currentLocation) && classes.active)}>
          <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
            <Tooltip title={item.name} placement="right-start">{item.icon}</Tooltip>
          </ListItemIcon>
          <ListItemText primary={item.name} disableTypography={true} />
          {item.badge}
        </ListItem>
      })}

      {/* tables link */}
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText primary="Tables" disableTypography={true} />
        {open ? <ExpandMoreIcon color="primary"/> : <ChevronRightIcon /> }
      </ListItem>
      <Collapse in={open && more} timeout="auto" unmountOnExit className={classes.collapse}>
        {renderList(tables)}
      </Collapse>
      <Divider/>

      {/* tables link */}
      <ListItem button onClick={handleClick} className={classes.item}>
        <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
          <TableChartIcon />
        </ListItemIcon>
        <ListItemText primary="Tables 2" disableTypography={true} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open && more} timeout="auto" unmountOnExit className={classes.collapse}>
        {renderList(tables)}
      </Collapse>


    </List>
  );
}