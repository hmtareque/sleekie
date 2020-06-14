import React from "react";
import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Button from "@material-ui/core/Button";
import EditIcon from "@material-ui/icons/Edit";
import Divider from "@material-ui/core/Divider";

import Authorizations from "./authorizations.component";
import DeleteRoleModal from './deletemodal.component';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 680,
  },
  button: {
    marginLeft: theme.spacing(2),
    marginBottom: theme.spacing(1),
  },
}));

const RoleDetails = ({ role }) => {
  const classes = useStyles();

  if (role) {
    return (
      <Card className={classes.root}>
        <CardHeader title={role.name} subheader={`${role.created_at}`} />
        <Divider />
        <CardContent>
          <Authorizations authorizations={role.authorizations} />
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            className={classes.button}
            startIcon={<EditIcon />}
            component={Link}
            to={`/auth/roles/${role._id}/edit`}
          >
            Edit {`${role.name}`} Role
          </Button>
          <DeleteRoleModal />
        </CardActions>
      </Card>
    );
  }

  return false;
};

export default RoleDetails;
