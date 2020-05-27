import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import PrimaryList from '../../../components/list.primary';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },

  appName: {
    color: theme.palette.info.dark,
    padding: '8px 5px',
    width: '200px',
    fontWeight: 'bold',

  },

  toolbar: {
    minHeight: '52px'
  },
  toolbarIcon: {
    color: theme.palette.primary.main,
  },

  drawerToolbar: {
    display: 'flex',
    padding: '2px 8px',
  },

  menuButton: {
    marginLeft: '-4px',
  },

  hide: {
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
      <Divider />
      <PrimaryList more={open} />
      <Divider />
      <PrimaryList more={open} />
    </Drawer>
  );
};

export default Sidebar;
