import React from 'react';
import { useHistory } from 'react-router-dom';
import MaterialTable from 'material-table';

const DetailRoleList = ( { data } ) => {

    const history = useHistory();

 


  return (
    <div>
    <MaterialTable
      title="List of Roles"
      columns={[
        { title: 'Name', field: 'name', },
        { title: 'Status', field: 'status' },
        { title: 'Created At', field: 'created_at' },
        { title: 'Updated At', field: 'updated_at' },
       
      ]}
      data={ data }
      actions={[
        {
          icon: 'info',
          tooltip: 'Show Detail',
          onClick: (e, item) => {
              history.push('/auth/roles/'+item._id);
          }
        },
        // {
        //     icon: 'edit',
        //     tooltip: 'Show Detail',
        //     onClick: (e, item) => {
        //         history.push('/auth/roles/'+item._id+'/edit');
        //     }
        //   }
      ]}
    />
    </div>
  );
}

export default DetailRoleList;
