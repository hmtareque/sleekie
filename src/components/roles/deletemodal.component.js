import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Paper from "@material-ui/core/Paper";
import Draggable from "react-draggable";
import { Divider, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
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

const DeleteRoleModal = ({ id, name }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleDeleteRole = () => {
    setTimeout(() => {
      console.log("delete role");
      setOpen(false);
    }, 2000);
  };

  return (
    <div>
      <Button
        variant="outlined"
        color="primary"
        size="large"
        onClick={handleClickOpen}
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
            Are you sure to delete the [Role] user role? This action is not
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
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default DeleteRoleModal;
