import React, { Component } from 'react';
import SimpleTable from '../../../views/tables/simple.table';
import { RoleCreateNav } from '../../../components/roles/nav.component';
import RoleForm from '../../../components/roles/form.component';

export default class CreateRole extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }
    }

    

    render() {
        return (
            <div>
                <h3>Create New Role</h3>
                <RoleCreateNav />
               <RoleForm />
            </div>
          
        );
    }
}

