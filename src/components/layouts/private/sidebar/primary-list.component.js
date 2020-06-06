import React from 'react';
import clsx from 'clsx';
import { fade, makeStyles } from '@material-ui/core/styles';
import ListSubheader from '@material-ui/core/ListSubheader';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Collapse from '@material-ui/core/Collapse';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

import { useHistory } from "react-router-dom";

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
import FileCopyIcon from '@material-ui/icons/FileCopy';

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Badge from '@material-ui/core/Badge';

import { blueGrey, blue } from '@material-ui/core/colors';
import RoundBadge from '../../../RoundBadge';
import { Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 260,
  },

  nested: {
    padding: 0,
    margin: 0,
    paddingTop: theme.spacing(0),
    paddingBottom: theme.spacing(0),
    backgroundColor: theme.palette.primary.dark,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
      
    }
  },

  nestedText: {
    paddingLeft: '25px',
    fontSize: '1rem',
    borderLeft: `2px solid ${theme.palette.info.dark}`,
    lineHeight: '32px',
    margin: 0,
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    transition: '0.2s all ease-in-out',
    '&:hover': {
      paddingLeft: '27px',
    }
  },

  nestedIcon: {
    color: theme.palette.info.dark,
    width: '16px',
    marginRight: '-16px',
    marginLeft: '25px',
  },

  nestedFocus: {
    color: theme.palette.grey[300],
    borderLeft: `2px solid ${theme.palette.grey[300]}`,
  },

  item: {
    fontFamily: ["Heebo", "sans-serif"].join(','),
    fontSize: '1.0rem',
    fontWeight: 500,
    paddingLeft: '20px',
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    transition: '0.2s all ease-in-out',
   '&:hover': {
     backgroundColor: fade(theme.palette.primary.dark, 0.7),
     paddingLeft: '22px',
   },
  },

  itemText: {
    paddingLeft: '6px',

    
  },

  icon: {
    color: theme.palette.info.light,
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


  listSubheader: {
    display: 'block',
    color: theme.palette.info.main,
    backgroundColor: theme.palette.primary.main, //fade('rgba(37, 48, 83, 1)', 0.9),
    fontSize: '0.8rem',
    textTransform: 'uppercase',
    paddingTop: '0px',
    paddingBottom: '0px',
    borderTop: `1px solid ${fade(theme.palette.primary.dark, 0.6)}`,
    borderBottom: `1px solid ${fade(theme.palette.primary.dark, 0.5)}`,
  },

  focus: {
    color: theme.palette.grey[300]
  },

}));

export default function PrimaryList({ more }) {
  const classes = useStyles();
  const [toggleList, setToggleList] = React.useState({});
  const [open, setOpen] = React.useState(false);

  const currentLocation = window.location.pathname;

  const history = useHistory();

  const handleClick = list_id => {
    setOpen(!open);
    toggleList[list_id] = !toggleList[list_id];
    setToggleList(toggleList);

    console.log(toggleList);
  };


  const dashboards = {
    id: "dashboards",
    name: 'Dashboards',
    icon: {
      more: <DashboardIcon className={clsx(classes.icon, toggleList['dashboards'] ? classes.focus : '')} />,
      less: <Tooltip title="Dashboard" placement="right-start" onClick={() => history.push('/dashboards/one')}>
        <DashboardIcon className={clsx(classes.icon, toggleList['dashboards'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Dashboard One', 'path': '/dashboards/one', },
      { name: 'Dashboard Two', 'path': '/dashboards/two', },
    ]
  }

  const examples = {
    id: "examples",
    name: 'Examples',
    icon: {
      more: <FileCopyIcon className={clsx(classes.icon, toggleList['examples'] ? classes.focus : '')} />,
      less: <Tooltip title="Dashboard" placement="right-start" onClick={() => history.push('/examples/one')}>
        <FileCopyIcon className={clsx(classes.icon, toggleList['examples'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Dashboards', 'path': '/dashboard', },
      { name: 'Examples', 'path': '/customers', },
      { name: 'Components', 'path': '/card', },
      { name: 'Maps', 'path': '/form', },
    ]
  }

  const tables = {
    id: "tables",
    name: 'Tables',
    icon: {
      more: <TableChartIcon className={clsx(classes.icon, toggleList['tables'] ? classes.focus : '')} />,
      less: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
        <TableChartIcon className={clsx(classes.icon, toggleList['tables'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Simple', 'path': '/tables/simple', },
      { name: 'Fix Head', 'path': '/tables/fix-head', },
      { name: 'Enhanced', 'path': '/tables/enhanced', },
      { name: 'Dense', 'path': '/tables/dense', },
      { name: 'Material', 'path': '/tables/material', },
    ]
  }

  const forms = {
    id: "forms",
    name: 'Forms',
    icon: {
      more: <PostAddIcon className={clsx(classes.icon, toggleList['forms'] ? classes.focus : '')} />,
      less: <Tooltip title="Form" placement="right-start" onClick={() => history.push('/forms/material')}>
        <PostAddIcon className={clsx(classes.icon, toggleList['forms'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Simple', 'path': '/tables/simple', },
      { name: 'Fix Head', 'path': '/tables/fix-head', },
      { name: 'Enhanced', 'path': '/tables/enhanced', },
      { name: 'Dense', 'path': '/tables/dense', },
      { name: 'Material', 'path': '/tables/material', },
    ]
  }


  const maps = {
    id: "maps",
    name: 'Maps',
    icon: {
      more: <MapIcon className={clsx(classes.icon, toggleList['maps'] ? classes.focus : '')} />,
      less: <Tooltip title="Dashboard" placement="right-start" onClick={() => history.push('/maps/one')}>
        <MapIcon className={clsx(classes.icon, toggleList['maps'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Google Map', 'path': '/dashboard', },
      { name: 'Vector Map', 'path': '/customers', },
    ]
  }

  const components = {
    id: "components",
    name: 'Components',
    icon: {
      more: <WidgetsIcon className={clsx(classes.icon, toggleList['components'] ? classes.focus : '')} />,
      less: <Tooltip title="Dashboard" placement="right-start" onClick={() => history.push('/components/one')}>
        <WidgetsIcon className={clsx(classes.icon, toggleList['components'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Dashboards', 'path': '/dashboard', },
      { name: 'Examples', 'path': '/customers', },
      { name: 'Components', 'path': '/card', },
      { name: 'Maps', 'path': '/form', },
    ]
  }

  const charts = {
    id: "charts",
    name: 'Charts',
    icon: {
      more: <BarChartIcon className={clsx(classes.icon, toggleList['charts'] ? classes.focus : '')} />,
      less: <Tooltip title="Form" placement="right-start" onClick={() => history.push('/forms/material')}>
        <BarChartIcon className={clsx(classes.icon, toggleList['charts'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'D3', 'path': '/charts/d3', },
      { name: 'Nivo', 'path': '/charts/nivo', },
      { name: 'Victory', 'path': '/charts/victory', },
      { name: 'Rechart', 'path': '/charts/rechart', },
      { name: 'Chartjs', 'path': '/charts/chartjs', },
      { name: 'Pivot Table', 'path': '/charts/pivot-table', },
    ]
  }






  const calendar = {
    name: 'Calendar',
    icon: {
      more: <EventIcon className={clsx(classes.icon, currentLocation === "/calendar" ? classes.focus : '')} />,
      less: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
        <EventIcon className={clsx(classes.icon, currentLocation === "/calendar" ? classes.focus : '')} />
      </Tooltip>,
    },
    path: '/calendar'
  }

  const auth = {
    id: "auth",
    name: 'Auth',
    icon: {
      more: <SupervisorAccountIcon className={clsx(classes.icon, toggleList['auth'] ? classes.focus : '')} />,
      less: <Tooltip title="Auth" placement="right-start" onClick={() => history.push('/auth/one')}>
        <SupervisorAccountIcon className={clsx(classes.icon, toggleList['auth'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Users', 'path': '/auth/users', },
      { name: 'Roles', 'path': '/auth/roles', },
      { name: 'Register', 'path': '/register', },
      { name: 'Forgot Password', 'path': '/auth/forgot-password', },
      { name: 'Reset Password', 'path': '/auth/reset-password', },
      { name: 'Simple Sign In', 'path': '/auth/simple-sign-in', },
      { name: 'Side Sign In', 'path': '/auth/side-sign-in', },
    ]
  }

  const website = {
    id: "website",
    name: 'Website',
    icon: {
      more: <WebIcon className={clsx(classes.icon, toggleList['website'] ? classes.focus : '')} />,
      less: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/website/material')}>
        <WebIcon className={clsx(classes.icon, toggleList['website'] ? classes.focus : '')} />
      </Tooltip>,
    },
    items: [
      { name: 'Simple', 'path': '/tables/simple', },
      { name: 'Fix Head', 'path': '/tables/fix-head', },
      { name: 'Enhanced', 'path': '/tables/enhanced', },
      { name: 'Dense', 'path': '/tables/dense', },
      { name: 'Material', 'path': '/tables/material', },
    ]
  }

 

  const renderItem = (item, more) => {
    return <ListItem button component={Link} to={ item.path } className={classes.item}>
      <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
        { more ? item.icon.more : item.icon.less }
      </ListItemIcon>
      <ListItemText primary={ item.name } disableTypography={true} className={clsx(classes.itemText, (currentLocation === item.path)? classes.focus : '')} />
    </ListItem>
  }

  const renderList = (list, more) => {
    return <React.Fragment>


      {more ?

        <ListItem button onClick={() => handleClick(list.id)} className={classes.item}>
          <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
            {list.icon.more}
          </ListItemIcon>
          <ListItemText primary={list.name} disableTypography={true} style={{ paddingLeft: '6px' }} className={toggleList[list.id] ? classes.focus : ''} />
          {toggleList[list.id] ? <ExpandMoreIcon className={toggleList[list.id] ? classes.focus : ''} /> : <ChevronRightIcon />}
        </ListItem>

        :

        <ListItem button component={Link} to={'/test'} className={classes.item}>
          <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
            {list.icon.less}
          </ListItemIcon>
          <ListItemText primary={'Test'} disableTypography={true} />
        </ListItem>

      }

      <Collapse in={toggleList[list.id] && more} timeout="auto" unmountOnExit className={classes.collapse}>
        <List component="div" disablePadding>
          {list.items.map((item, index) => {
            return <ListItem button component={Link} to={item.path} className={clsx(classes.nested)}>
              <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
                <FiberManualRecordIcon className={clsx(classes.nestedIcon, (currentLocation === item.path) && classes.focus)} />
              </ListItemIcon>
              <ListItemText primary={item.name} disableTypography={true} className={clsx(classes.nestedText, (currentLocation === item.path) && classes.nestedFocus)} />
            </ListItem>
          })}
        </List>
      </Collapse>
    </React.Fragment>;
  }

  return (
    <React.Fragment>

<List
      component="div" disablePadding
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="span"
          id="nested-list-subheader"
          className={more ? classes.listSubheader : classes.hide}
        >
          PRIMARY
        </ListSubheader>
      }
      className={classes.root}
    >
      {renderList(dashboards, more)}
      {renderList(examples, more)}
      {renderList(forms, more)}
      {renderList(tables, more)}

    </List>

    <List
      component="div" disablePadding
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="span"
          id="nested-list-subheader"
          className={more ? classes.listSubheader : classes.hide}
        >
          secondary
        </ListSubheader>
      }
      className={classes.root}
    >
      { renderList(components, more) }
      { renderList(maps, more) }
      { renderList(charts, more) }
      { renderItem(calendar, more) }

    </List>

    <List
      component="div" disablePadding
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader
          component="span"
          id="nested-list-subheader"
          className={more ? classes.listSubheader : classes.hide}
        >
          setting
        </ListSubheader>
      }
      className={classes.root}
    >
       { renderList(auth, more) }
      { renderList(website, more) }

    </List>

    </React.Fragment>
   
  );
}