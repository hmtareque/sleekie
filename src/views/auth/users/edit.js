import React, { Component } from "react";
import { CreateRoleNav } from "../../../components/roles/nav.component";
import EditForm from "../../../components/roles/editform.component";
import axios from 'axios';

export default class EditRole extends Component {
  constructor(props) {
    super(props);

    //console.log(props)

    this.state = {
        set: false,
        alert: false,
    role_id: props.match.params.role_id,
      role: [],
    };
  }

  componentDidMount = () => {
    axios
      .get(`http://localhost:3001/roles/${this.state.role_id}`)
      .then((response) => {


      //  console.log(response.data.authorizations)

        this.setState({
          role: response.data,
          set: true
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
        <CreateRoleNav />
        { (this.state.set)? <EditForm data={ this.state } /> : false }
      </div>
    );
  }
}
