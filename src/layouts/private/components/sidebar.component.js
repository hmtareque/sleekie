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

import Button from '@material-ui/core/Button';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';
import SaveIcon from '@material-ui/icons/Save';

import ExpandMore from '@material-ui/icons/ExpandMore';

import { blue } from '@material-ui/core/colors';

import PrimaryList from '../../../components/list.primary';




const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
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
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 240,
  },
  title: {
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    display: 'none',
    [theme.breakpoints.up('md')]: {
      display: 'flex',
    },
  },
  sectionMobile: {
    display: 'flex',
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },


  hide: {
    display: 'none'
  },

 

 


}));

const Sidebar = props => {
    const { open, variant, onOpen, onClose, className, ...rest } = props;
  
    const classes = useStyles();
  

    return (
      

<Drawer

variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}

>
<div className={classes.drawerToolbar}>
  
  <IconButton onClick={onClose} className={clsx(classes.toolbarIcon, !open && classes.hide)}>
    <ChevronLeftIcon />
  </IconButton>

  <Typography className={clsx(classes.appName, !open && classes.hide)} variant="h6" noWrap>
    APP NAME
  </Typography>

  <IconButton
    edge="start"
    color="inherit"
    aria-label="open drawer"
    onClick={onOpen}
    className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
  >
    <MenuIcon />
  </IconButton>
 

  
</div>
<Divider />

<PrimaryList more={open}/>
<Divider />
<PrimaryList more={open}/>
</Drawer>

    );
  };
  
//   Sidebar.propTypes = {
//     className: PropTypes.string,
//     onClose: PropTypes.func,
//     open: PropTypes.bool.isRequired,
//     variant: PropTypes.string.isRequired
//   };
  
  export default Sidebar;
  