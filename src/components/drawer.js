import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import Box from '@material-ui/core/Box';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Link from '@material-ui/core/Link';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import InputBase from '@material-ui/core/InputBase';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import SearchIcon from '@material-ui/icons/Search';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MailIcon from '@material-ui/icons/Mail';
import NotificationsIcon from '@material-ui/icons/Notifications';
import MoreIcon from '@material-ui/icons/MoreVert';



import { mainListItems, secondaryListItems } from './listItems';
import Chart from './Chart';
import Deposits from './Deposits';
import Orders from './Orders';

import MUITestForm from './forms/MUITestForm';
import FormikForm from './forms/FormikForm';
import SignupForm from './forms/signup.form';
import TestForm from './forms/test.form';

import MaterialTableDemo from '../components/tables/full.table';
import PrimaryList from './list.primary';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="left">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({

  toolbar: {
    //paddingRight: 24, // keep right padding when drawer closed
    minHeight: '52px'
  },
  toolbarIcon: {
    color: theme.palette.info.dark,

  },

  drawerToolbar: {
    display: 'flex',
   // alignItems: 'center',
    //  justifyContent: 'flex-end',
    padding: '2px 8px',

    // [theme.breakpoints.down('sm')]: {
    //   padding: '0px 8px',
    // },


  //  backgroundColor: theme.palette.info.main,
   // ...theme.mixins.toolbar,
  },

  appName: {
    color: theme.palette.info.dark,
    padding: '8px 5px',
    width: '200px',
    fontWeight: 'bold',
  },

  grow: {
    flexGrow: 1,
  },
  menuButton: {
    //marginRight: theme.spacing(2),
    marginLeft: '-4px',
    // [theme.breakpoints.up('sm')]: {
    //   padding: '8px',
    // },
  },

  menuButtonHidden: {
    display: 'none',
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    // [theme.breakpoints.up('sm')]: {
    //   width: theme.spacing(9),
    // },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
 
  fixedHeight: {
    height: 240,
  },

  hide: {
    display: 'none'
  }
}));

export default function Sidebar({ handleDrawer}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  
  return (
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.drawerToolbar}>
          
          <IconButton onClick={handleDrawer} className={clsx(classes.toolbarIcon, !open && classes.hide)}>
            <ChevronLeftIcon />
          </IconButton>

          <Typography className={clsx(classes.appName, !open && classes.hide)} variant="h6" noWrap>
            APP NAME
          </Typography>

          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
        </div>
        <Divider />

        <PrimaryList more={open}/>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
  );
}