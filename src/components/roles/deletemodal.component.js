import React from "react";
import axios from "axios";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { Divider, makeStyles } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

import { useSnackbar } from "notistack";
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    button: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
      },
  title: {
    padding: theme.spacing(2),
    cursor: "move",
  },
  content: {
    padding: theme.spacing(2),
  },
  actions: {
    padding: theme.spacing(2),
  },
}));

function PaperComponent(props) {
  return (
    <Draggable
      handle="#draggable-dialog-title"
      cancel={'[class*="MuiDialogContent-root"]'}
    >
      <Paper {...props} />
    </Draggable>
  );
}

const DeleteRoleModal = ({ role }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [submitting, setSubmitting] = React.useState(false);

  const history = useHistory();
  const { enqueueSnackbar } = useSnackbar();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteRole = () => {

setSubmitting(true);
    axios
    .delete(`http://localhost:3001/roles/${role.id}`)
    .then((response) => {

     setSubmitting(false);

      enqueueSnackbar(
        `Successfully deleted ${role.name} role.`,
        {
          variant: "success",
        }
      );

      history.push('/auth/roles');

    })
    .catch(function (error) {
      console.log(error.response.data);

      setSubmitting(false);


      enqueueSnackbar(`Internal server error.${new Date().getTime()}`, {
        variant: "error",
      });
    });

  };

  return (
    <div>
      <Button
        variant="outlined"
        color="secondary"
        onClick={handleClickOpen}
        className={classes.button}
        startIcon={<DeleteIcon />}
      >
        Delete
      </Button>

      <Dialog
        open={open}
        onClose={handleClose}
        PaperComponent={PaperComponent}
        aria-labelledby="draggable-dialog-title"
      >
        <DialogTitle className={classes.title} id="draggable-dialog-title">
          Delete Role
        </DialogTitle>
        <Divider />
        <DialogContent className={classes.content}>
          <DialogContentText>
  Are you sure to delete the <strong>{`${role.name}`}</strong> user role? This action is not
            reversable.
          </DialogContentText>
        </DialogContent>
        <Divider />
        <DialogActions className={classes.actions}>
          <Button
            autoFocus
            onClick={handleClose}
            color="primary"
            variant="outlined"
          >
            Cancel
          </Button>
          <Button
            onClick={handleDeleteRole}
            color="secondary"
            variant="outlined"
            disabled={submitting}
          >
            { submitting ? 'Deleting ...' : 'Delete' }
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteRoleModal;
