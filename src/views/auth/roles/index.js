import React, { Component } from "react";
import axios from "axios";
import SimpleTable from "../../../components/roles/list.component";
import { RoleListNav } from "../../../components/roles/nav.component";
import Flash from "../../../components/common/flash.component";

export default class ListOfRoles extends Component {
  constructor(props) {
    super(props);

    console.log(props);

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
    return (
      <div>
        <RoleListNav />
        {(this.state.flash)? <Flash flash={this.state.flash} /> : false }
        <SimpleTable data={this.state.roles} />
      </div>
    );
  }
}
