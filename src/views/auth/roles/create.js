import React, { Component } from "react";
import { CreateRoleNav } from "../../../components/roles/nav.component";
import RoleForm from "../../../components/roles/form.component";

export default class CreateRole extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };
  }

  render() {
    return (
      <div>
        <CreateRoleNav />
        <RoleForm />
      </div>
    );
  }
}
