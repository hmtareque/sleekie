import React, { Component } from "react";
import { CreateUserNav } from "../../../components/users/nav.component";
import UserForm from "../../../components/users/form.component";

export default class CreateUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
      clients: [],
    };
  }

  render() {
    return (
      <div>
        <CreateUserNav />
        <UserForm />
      </div>
    );
  }
}
