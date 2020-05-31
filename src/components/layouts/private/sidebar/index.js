import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import { fade } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import { grey, blue, blueGrey } from '@material-ui/core/colors';

import SlimScroller from '../../../SlimScroller';
import PrimaryList from './primary-list.component';
import AppName from './app-name.component';

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },



  toolbar: {
    minHeight: '64px'
  },
  toolbarIcon: {
     color: theme.palette.info.light,
    //  marginLeft: '-4px',
  },

  drawerToolbar: {
    display: 'flex',
    padding: '8px',

     [theme.breakpoints.down('xs')]: {
      padding: '4px 8px',
    },

    backgroundColor: theme.palette.primary.dark,
   // borderBottom: `1px solid ${theme.palette.primary.main}`,
    //  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },

  menuButton: {
    color: theme.custom ? theme.custom.sidebar.color : theme.palette.info.light,
    marginLeft: 0,
  },

  hide: {
    display: 'none',
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
   borderColor: theme.palette.primary.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100%',
    //backgroundColor: theme.palette.primary.dark,
    backgroundColor: theme.palette.primary.dark, //'rgba(50, 60, 93, 1)',
    color: theme.palette.info.light,
    fontWeight: 500,

  },

  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
  },

  scrollWrapper: {
    backgroundColor: fade(theme.palette.primary.main, 0.8), //'rgba(37, 48, 83, 1)',
  //  borderBottom: `1px solid ${theme.palette.primary.main}`,
  //  height: `calc(100vh - 64px)`,
   // borderRight: '1px solid red',
  }

}));

const Sidebar = ({ appName, open, onOpen, onClose }) => {

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

       

        <AppName open={open} />

        <IconButton
          edge="start"
          color="inherit"
          aria-label="open drawer"
          onClick={onOpen}
          className={clsx(classes.menuButton, open && classes.hide)}
        >
          <MenuIcon />
        </IconButton>
      </div>

<div className={classes.scrollWrapper}>


      <SlimScroller style={{ height: 620 }}  autoHide autoHideTimeout={500} autoHideDuration={200}>
        <PrimaryList more={open} />
        {/* <PrimaryList more={open} /> */}
      </SlimScroller>

      </div>

    <div className={classes.brand} style={{width: '100%', textAlign: 'center', padding: '16px', fontFamily: 'fantasy'}}>When you need help?</div>

    </Drawer>
  );
};

export default Sidebar;
