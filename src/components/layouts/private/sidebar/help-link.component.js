import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import Button from '@material-ui/core/Button';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';

import Tooltip from '@material-ui/core/Tooltip';

import { Link } from 'react-router-dom';

import { Animated } from 'react-animated-css';

const useStyles = makeStyles((theme) => ({

    root: {
        display: 'block',
        overflow: 'hidden',
        color: theme.palette.info.light,
        padding: '8px 20px',
        maxWidth: '200px',
    },

    text: {
        display: 'block',
        fontWeight: 500,
        fontSize: '1rem',
        fontFamily: ["Heebo", "sans-serif"].join(','),
        marginBottom: '6px',
        color: theme.palette.secondary.main,
    },

    helpButton: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.grey[200],

        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
            color: theme.palette.common.white,
        }
    },

    smallHelpButton: {
        padding: 0,
    },

    smallHelpButtonIcon: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.common.white,
        }
    },

    helpButtonIcon: {
        color: 'white'
    }
    ,
    hide: {
        display: 'none',
    },
}));

const HelpLink = ({ expanded }) => {
    const classes = useStyles();
    const [move, setMove] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
            setMove(!move);
        }, 4000);
        return () => clearInterval(interval);
    });

    return (
        <div className={clsx(classes.root)}>
            <Typography className={expanded ? classes.text : classes.hide} variant="p" noWrap>
                How it works?
            </Typography>

            <Animated className="name" animationIn="shakeX" animationOut="shakeY" animationInDuration={1000} animationOutDuration={1000} isVisible={move}>
                <Button
                    variant="contained"
                    size="small"
                    className={expanded ? classes.helpButton : classes.hide}
                    startIcon={<ContactSupportIcon className={classes.helpButtonIcon} />}
                    component={Link}
                    to="/help"
                >
                    Help
                    </Button>

                <IconButton aria-label="delete" className={expanded ? classes.hide : classes.smallHelpButton} component={Link} to="/help">
                    <Tooltip title="Need help?" placement="right-start"><ContactSupportIcon className={classes.smallHelpButtonIcon} /></Tooltip>
                </IconButton>
            </Animated>
        </div>
    );
}

export default HelpLink;


