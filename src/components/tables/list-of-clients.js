import React, { Component } from 'react';
import axios from 'axios';

import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
      minWidth: 650,
    },
  });

class Clients extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clients: []
        }
    }

    componentDidMount = () => {
        console.log('clients');

        axios.get('http://localhost:3001/clients').then(response => {

          //  console.log(response);

            this.setState({
                clients: response.data
            })

          }).catch(error => {
              console.log(error);
          });

    }

    render() {
        return (
            <TableContainer component={Paper} style={{width: '460px'}}>
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Name</TableCell>
                  <TableCell align="right">Status</TableCell>
                  <TableCell align="right">Created At</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {this.state.clients.map((client) => (
                  <TableRow key={client.name}>
                    <TableCell component="th" scope="row">
                      {client.name}
                    </TableCell>
                    <TableCell align="right">{client.status}</TableCell>
                    <TableCell align="right">{client.created_at}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        );
    }
}

export default Clients;