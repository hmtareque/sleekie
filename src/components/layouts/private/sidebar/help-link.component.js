import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
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
        padding: theme.spacing(0.5, 2),
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.common.white,
        '&:hover': {
            backgroundColor: theme.palette.secondary.dark,
        }
    },

    helpButtonIcon: {
        float: 'left',
        fontSize: '1.25rem',
        color: theme.palette.common.white,
    },

    smallHelpButton: {
        padding: 0
    },

    smallHelpButtonIcon: {
        color: theme.palette.secondary.main,
        '&:hover': {
            color: theme.palette.common.white,
        }
    },

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
        }, 5000);
        return () => clearInterval(interval);
    });

    return (
        <div className={clsx(classes.root)}>
            <Typography className={expanded ? classes.text : classes.hide} variant="h3" noWrap>
                How it works?
        </Typography>

            <Button
                variant="contained"
                size="small"
                className={expanded ? classes.helpButton : classes.hide}
                component={Link}
                to="/help"
            >
                <Animated animationIn="shakeX" animationOut="heartBeat" animationInDuration={2000} animationOutDuration={2000} isVisible={move}>
                    <ContactSupportIcon className={classes.helpButtonIcon} /> Help
                </Animated>
            </Button>

            <IconButton aria-label="delete" className={expanded ? classes.hide : classes.smallHelpButton} component={Link} to="/help">
                <Animated animationIn="shakeX" animationOut="heartBeat" animationInDuration={2000} animationOutDuration={2000} isVisible={move}>
                    <Tooltip title="Need help?" placement="right-start">
                        <ContactSupportIcon className={classes.smallHelpButtonIcon} />
                    </Tooltip>
                </Animated>
            </IconButton>
        </div>
    );
}

export default HelpLink;


