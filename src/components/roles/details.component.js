import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Button from '@material-ui/core/Button';

import Authorizations from './authorizations.component';
import { Divider } from '@material-ui/core';

import EditRole from '../../views/auth/roles/edit';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 680,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const RoleDetails = ({ role }) => {
  const classes = useStyles();
 
  if(role) {
    return (
        <Card className={classes.root}>
          <CardHeader
            title={role.name}
            subheader={`${role.created_at}`}
          />
          <Divider />
          <CardContent>
         
    
         <Authorizations authorizations={ role.authorizations } />
    
    
          </CardContent>
          <Divider />
          <CardActions disableSpacing>
          <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          component={Link}
          to={`/auth/roles/${role._id}/edit`}
        >
          Edit {`${role.name}`} Role
        </Button>
           

          </CardActions>
        </Card>
      );
  }

  return false;

  
}

export default RoleDetails;