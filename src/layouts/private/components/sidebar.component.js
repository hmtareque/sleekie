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

import SlimScroller from '../../../components/SlimScroller';
import PrimaryList from '../../../components/list.primary';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appName: {
    color: 'white',
    padding: '8px 5px',
    width: '200px',
    fontWeight: 'bold',

  },

  toolbar: {
    minHeight: '64px'
  },
  toolbarIcon: {
   // color: 'white',
  //  marginLeft: '-4px',
  },

  drawerToolbar: {
    display: 'flex',
    padding: '8px',
    backgroundColor: blueGrey[700],
  //  boxShadow: '0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14), 0px 1px 10px 0px rgba(0,0,0,0.12)',
  },

  menuButton: {
    color: 'blue',
   marginLeft: 0,
  },

  hide: {
    display: 'none',
  },

  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    borderColor: theme.palette.info.main,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    height: '100%',
   // backgroundColor: blueGrey.A900,

  },

  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(8),
  },

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

        <Typography className={clsx(classes.appName, !open && classes.hide)} variant="h6" noWrap>
          {appName}
        </Typography>

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

      <SlimScroller style={{height: '600px', backgroundColor: 'white'}} autoHide autoHideTimeout={500} autoHideDuration={200}>
      <PrimaryList more={open} />
      </SlimScroller>

      <Divider />
      
    </Drawer>
  );
};

export default Sidebar;
