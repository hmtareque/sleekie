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

import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

import Badge from '@material-ui/core/Badge';

import { blueGrey, blue } from '@material-ui/core/colors';
import RoundBadge from '../../../RoundBadge';
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
        backgroundColor: theme.palette.primary.dark,

        '&:hover': {
            backgroundColor: theme.palette.primary.main,
        }

    },

    nestedText: {
        paddingLeft: '25px',
        // paddingTop: '6px',
        // paddingBottom: '6px',
        // backgroundColor: fade(theme.palette.grey[200], 0.4),
        //paddingTop: '4px',
        //paddingBottom: '4px',
        fontSize: '1rem',
        //  marginLeft: '-16px',
        borderLeft: `2px solid ${theme.palette.info.dark}`,
        // backgroundColor: theme.palette.primary.dark,
        lineHeight: '32px',
        margin: 0,
        paddingTop: '8px',
        paddingBottom: '8px',

        '&:hover': {
            // color: 'white',
        }
    },

    nestedIcon: {
        color: theme.palette.info.dark,
        //  marginLeft: '-25px', 
        width: '16px',
        // margin: 0,
        marginRight: '-16px',
        marginLeft: '25px',
        //  paddingLeft: '24px',
        //  paddingRight: '24px',

    },

    collapse: {
        //backgroundColor: theme.palette.primary.dark,
    },

    item: {
        // paddingTop: '6px',
        //  paddingBottom: '6px',
        // fontSize: '16px',
        // fontWeight: '500',

        fontWeight: 500,
        fontFamily: ["Heebo", "sans-serif"].join(','),
        fontSize: '1rem',
        // color: theme.palette.dark,
        paddingLeft: '20px',
        '&:hover': {
            // fontWeight: 600,
            backgroundColor: fade(theme.palette.primary.dark, 0.7),
            //  color: theme.palette.black,


        },


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

    listSubheader: {
        display: 'block',
        color: theme.palette.info.main,
        backgroundColor: theme.palette.primary.main, //fade('rgba(37, 48, 83, 1)', 0.9),
        fontSize: '0.8rem',
        paddingTop: '0px',
        paddingBottom: '0px',
        borderTop: `1px solid ${fade(theme.palette.primary.dark, 0.6)}`,
        borderBottom: `1px solid ${fade(theme.palette.primary.dark, 0.5)}`,
    },

    focus: {
        color: theme.palette.grey[50]
    },
}));

export default function PrimaryList({ more }) {
    const classes = useStyles();
    const [listId, setListId] = React.useState(0);
    const [open, setOpen] = React.useState(false);

    const currentLocation = window.location.pathname;

    const history = useHistory();

    const handleClick = ( list_id ) => {
        
        setOpen(!open);
        setListId(list_id);
        

        if(listId !== list_id) {
            setOpen(true);
        }
    };


    const test1 = {
        name: 'Dashboards',
        path: '/dashboard',
        icon: <DashboardIcon className={classes.icon} />
    }


    const dashboards = {
        id: "dashboards",
        name: 'Dashboards',
        icon: {
            less: <DashboardIcon className={clsx(classes.icon, open && (listId === 'dashboards') ? classes.focus : '')} />,
            more: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
                <DashboardIcon className={clsx(classes.icon, (listId === 'dashboards') && more ? classes.focus : '')} />
            </Tooltip>,
        },
        items: [
            { name: 'Idea One', 'path': '/dashboard' },
            { name: 'Idea Two', 'path': '/customers', },
            { name: 'Idea Thee', 'path': '/card', },
        ]
    }

    const examples = {
        id: 'examples',
        name: 'Examples',
        icon: {
            less: <WebIcon className={clsx(classes.icon, open && (listId === 'examples') ? classes.focus : '')} />,
            more: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
                <WebIcon className={clsx(classes.icon, (listId === 'examples') && more ? classes.focus : '')} />
            </Tooltip>,
        },
        items: [
            { name: 'Profile', 'path': '/examples/simple', icon: <DashboardIcon className={classes.icon} /> },
            { name: 'Fix Head', 'path': '/examples/fix-head', icon: <BarChartIcon className={classes.icon} /> },
            { name: 'Enhanced', 'path': '/examples/enhanced', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Dense', 'path': '/examples/dense', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Material', 'path': '/examples/material', icon: <PeopleOutlineIcon className={classes.icon} /> },
        ]
    }

    const tables = {
        id: 'tables',
        name: 'Tables',
        icon: {
            less: <PeopleIcon className={clsx(classes.icon, open && (listId === 'tables') ? classes.focus : '')} />,
            more: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
                <WebIcon className={clsx(classes.icon, (listId === 'tables') ? classes.focus : '')} />
            </Tooltip>,
        },
        items: [
            { name: 'Simple', 'path': '/tables/simple', icon: <DashboardIcon className={classes.icon} /> },
            { name: 'Fix Head', 'path': '/tables/fix-head', icon: <BarChartIcon className={classes.icon} /> },
            { name: 'Enhanced', 'path': '/tables/enhanced', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Dense', 'path': '/tables/dense', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Material', 'path': '/tables/material', icon: <PeopleOutlineIcon className={classes.icon} /> },
        ]
    }

    const forms = {
        id: 'forms',
        name: 'Forms',
        icon: {
            less: <PeopleIcon className={clsx(classes.icon, open && (listId === 'forms') ? classes.focus : '')} />,
            more: <Tooltip title="Metarial" placement="right-start" onClick={() => history.push('/tables/material')}>
                <WebIcon className={clsx(classes.icon, (listId === 'forms') ? classes.focus : '')} />
            </Tooltip>,
        },
        items: [
            { name: 'Simple', 'path': '/tables/simple', icon: <DashboardIcon className={classes.icon} /> },
            { name: 'Fix Head', 'path': '/tables/fix-head', icon: <BarChartIcon className={classes.icon} /> },
            { name: 'Enhanced', 'path': '/tables/enhanced', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Dense', 'path': '/tables/dense', icon: <PeopleOutlineIcon className={classes.icon} /> },
            { name: 'Material', 'path': '/tables/material', icon: <PeopleOutlineIcon className={classes.icon} /> },
        ]
    }

    const maps = [
        { name: 'Google', 'path': '/tables/simple', icon: <DashboardIcon /> },
        { name: 'Vector', 'path': '/tables/fix-head', icon: <BarChartIcon /> },
    ];

    const auth = [
        { name: 'Sign In', 'path': '/login' },
        { name: 'Sign In by Side', 'path': '/tables/fix-head' },
    ];

    const renderItem = ({ more }) => {
        return <ListItem button component={Link} to={'/test'} className={classes.item}>
            <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
                <TableChartIcon className={classes.icon} />
            </ListItemIcon>
            <ListItemText primary={'Test'} disableTypography={true} />
        </ListItem>
    }

    const renderList = (list, open, more) => {
        return <React.Fragment>
            <ListItem button onClick={() => handleClick(list.id)} className={classes.item}>
                <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
                    {more ? list.icon.less : list.icon.more}
                </ListItemIcon>
                <ListItemText primary={list.name} disableTypography={true} style={{ paddingLeft: '6px' }} className={(listId == list.id && open) ? classes.focus : ''} />
                {listId == list.id && open ? <ExpandMoreIcon className={(listId == list.id && open) ? classes.focus : ''} /> : <ChevronRightIcon />}
            </ListItem>
            <Collapse in={listId == list.id && open} timeout="auto" unmountOnExit className={classes.collapse}>
                <List component="div" disablePadding>
                    {list.items.map((item, index) => {
                        return <ListItem button component={Link} to={item.path} className={clsx(classes.nested)}>
                            <ListItemIcon className={more ? classes.iconSpace : classes.openIconSpace}>
                                <FiberManualRecordIcon className={classes.nestedIcon} />
                            </ListItemIcon>
                            <ListItemText primary={item.name} disableTypography={true} className={classes.nestedText} />
                        </ListItem>
                    })}
                </List>
            </Collapse>
        </React.Fragment>;
    }

    return (
        <React.Fragment>
            <List
                component="div"
                disablePadding
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
                {renderList(dashboards, open, more)}
                {renderList(examples, open, more)}
                {renderList(forms, open, more)}
                {renderList(tables, open, more)}
                {renderItem(more)}
                {renderItem(more)}
            </List>

            <List
                component="div"
                disablePadding
                aria-labelledby="nested-list-subheader"
                subheader={
                    <ListSubheader 
                        component="span" 
                        id="nested-list-subheader" 
                        className={more ? classes.listSubheader : classes.hide}
                    >
                    SECONDARY
                    </ListSubheader>
                }
                className={classes.root}
            >
                {renderList(dashboards, open, more)}
                {renderList(forms, open, more)}
                {renderList(tables, open, more)}
                {renderItem(more)}
                {renderItem(more)}
            </List>

        </React.Fragment>
    );
}