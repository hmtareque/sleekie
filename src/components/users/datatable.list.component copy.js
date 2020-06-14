import React from "react";
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import TextField from '@material-ui/core/TextField';
import Switch from '@material-ui/core/Switch';
import MUIDataTable from "mui-datatables";

class Example extends React.Component {

  render() {

    const columns = [
      {
        name: "name",
        label: "Name",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta ) => (
           <Link to={'/auth/roles/'} >{ value }</Link>
          )
        }
      },
      {
        name: "title",
        label: "Title",
        options: {
          filter: true,
        }
      },
      {
        name: "location",
        label: "Location",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {
            return (
              <div>Cities</div>
            );
          },
        }
      },
      {
        name: "age",
        label: "Age",
        options: {
          filter: false,
          customBodyRender: (value, tableMeta, updateValue) => (
            <FormControlLabel
              control={<TextField value={value || ''} type='number' />}
              onChange={event => updateValue(event.target.value)}
            />
          )
        }
      },
      {
        name: "salary",
        label: "Salary",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {

            const nf = new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD',
              minimumFractionDigits: 2,
              maximumFractionDigits: 2
            });

            return nf.format(value);
          }
        }
      },
      {
        name: "active",
        label: "Active",
        options: {
          filter: true,
          customBodyRender: (value, tableMeta, updateValue) => {

            return (
              <FormControlLabel
                label={value ? "Yes" : "No"}
                value={value ? "Yes" : "No"}
                control={
                  <Switch color="primary" checked={value} value={value ? "Yes" : "No"} />
                }
                onChange={event => {
                  updateValue(event.target.value === "Yes" ? false : true);
                }}
              />
            );

          }
        }
      }
    ];

    const data = [
      { name: "Gabby George", title: "Business Analyst", location: "Minneapolis", age: 30, salary: 100000, active: true },
      { name: "Aiden Lloyd", title: "Business Consultant", location: "Dallas",  age: 55, salary: 200000, active: true },
      { name: "Jaden Collins", title: "Attorney", location: "Santa Ana", age: 27, salary: 500000, active: false },
      { name: "Franky Rees", title: "Business Analyst", location: "St. Petersburg", age: 22, salary: 50000, active: false }
    ];

    const options = {
      filter: true,
      filterType: 'dropdown',
      responsive: 'standard',
      rowsPerPage: 5,
      rowsPerPageOptions: [5, 10, 15, 25, 50, 100]
    };

    return (
      <MUIDataTable title={"Example"} data={data} columns={columns} options={options} />
    );

  }
}

export default Example;
