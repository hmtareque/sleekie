import React from "react";
import { useHistory } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Alert from "@material-ui/lab/Alert";
import IconButton from "@material-ui/core/IconButton";
import Collapse from "@material-ui/core/Collapse";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(2),
  },
}));

const Flash = ({ flash }) => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    history.push(history.location.pathname, false);
    setOpen(false);
  };

  if (flash && open) {
    return (
        <div className={classes.root}>
      <Collapse in={open}>
        <Alert
          severity={flash.type}
          action={
            <IconButton
              aria-label="close"
              color="inherit"
              size="small"
              onClick={() => handleClose()}
            >
              <CloseIcon fontSize="inherit" />
            </IconButton>
          }
        >
          {flash.msg}
        </Alert>
      </Collapse>
      </div>
    );
  } else {
    return "";
  }
};

export default Flash;
