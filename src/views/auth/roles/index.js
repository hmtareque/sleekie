import React, { Component } from 'react';
import axios from 'axios';
import SimpleTable from '../../../views/tables/simple.table';
import { RoleListNav } from '../../../components/roles/nav.component';

export default class ListOfRoles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }
    }

    componentDidMount = () => {
        // console.log('clients');

        // axios.get('http://localhost:3001/clients').then(response => {

        //   //  console.log(response);

        //     this.setState({
        //         clients: response.data
        //     })

        //   }).catch(error => {
        //       console.log(error);
        //   });
    }

    render() {
        return (
            <div>
                <h3>List of Roles</h3>
                <RoleListNav />
<SimpleTable />
            </div>
          
        );
    }
}

