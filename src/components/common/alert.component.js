import React from 'react';
import { useHistory } from "react-router-dom";
import Snackbar from '@material-ui/core/Snackbar';
import MuiAlert from '@material-ui/lab/Alert';
import { makeStyles } from '@material-ui/core/styles';

function Message(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Alert = ({ data }) => {
  const classes = useStyles();
  const history = useHistory();
  const t = data.type !== undefined ? true : false;

  const [open, setOpen] = React.useState(t);

  console.log(data)

  console.log(open)

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    history.push(history.location.pathname, false);
    setOpen(false);
  };


  if(data) {
    return (
      <div className={classes.root}>
        <Snackbar open={open} autoHideDuration={12000} onClose={handleClose}  anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}>
          <Message onClose={handleClose} severity={data.type}>
           {data.msg}
          </Message>
        </Snackbar>
      </div>
    );
  }

  return "";
}

export default Alert;
