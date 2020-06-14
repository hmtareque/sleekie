import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../../components/roles/simple.list.component";
import { UserListNav } from "../../../components/users/nav.component";
import Flash from "../../../components/common/flash.component";
import DetailRoleList from "../../../components/roles/detail.list.component";
import Example from "../../../components/roles/datatable.list.component";
import Alert from "../../../components/common/alert.component";

import { useSnackbar } from "notistack";



export default class ListOfRoles extends Component {
  constructor(props) {
    super(props);

   // console.log(props);

    this.state = {
      flash: props.location.state,
      roles: [],
    };

   


  }

  componentDidMount = () => {
    axios
      .get("http://localhost:3001/roles")
      .then((response) => {
        this.setState({
          roles: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
  //  console.log(this.state);

    return (
      <div>
        <UserListNav />
        <Example data={this.state.roles} />
      </div>
    );
  }
}
