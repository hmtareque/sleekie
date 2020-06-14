import React, { Component } from "react";
import axios from "axios";
import RoleDetails from "../../../components/roles/details.component";
import { ShowRoleNav } from "../../../components/roles/nav.component";
import Flash from "../../../components/common/flash.component";

export default class ShowRole extends Component {
  constructor(props) {
    super(props);

    console.log(props);

    this.state = {
      role_id: props.match.params.role_id,
      role: {}
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/roles/${this.state.role_id}`)
      .then((response) => {

        console.log(response.data);


        this.setState({
          role: response.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
      console.log(this.state)
    return (
      <div>
        <ShowRoleNav />
        <RoleDetails role={this.state.role} />
      </div>
    );
  }
}



