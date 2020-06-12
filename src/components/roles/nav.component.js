import React from 'react';
import { useHistory } from "react-router-dom";
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import KeyboardVoiceIcon from '@material-ui/icons/KeyboardVoice';
import Icon from '@material-ui/core/Icon';


import SaveIcon from '@material-ui/icons/Save';
import AddIcon from '@material-ui/icons/Add';
import ListIcon from '@material-ui/icons/List';

const useStyles = makeStyles((theme) => ({
  button: {
    marginRight: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export const RoleListNav = () => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div>
      <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push('/auth/roles/create')}
        >
          Create New Role
        </Button>
</div>
  );
}

export const CreateRoleNav = () => {
    const classes = useStyles();
    const history = useHistory();
  
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<ListIcon />}
          onClick={() => history.push('/auth/roles')}
        >
         List of Roles
        </Button>
      </div>
    );
  }

  export const ShowRoleNav = () => {
    const classes = useStyles();
    const history = useHistory();
  
    return (
      <div>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<AddIcon />}
          onClick={() => history.push('/auth/roles/create')}
        >
          Create New Role
        </Button>
        <Button
          variant="outlined"
          color="primary"
          size="large"
          className={classes.button}
          startIcon={<ListIcon />}
          onClick={() => history.push('/auth/roles')}
        >
         List of Roles
        </Button>
      </div>
    );
  }
  
  
