import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Table} from 'reactstrap';

class SimpleTable extends Component {
constructor(props){
  super(props);
  this.state={
  };
}
render() {
    return (
      <React.Fragment>
      <Table>
    <thead>
        <tr className="">
            <th>FName</th>
            <th>Lname</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
        {this.props.array.map((item,index)=>
        (
        <tr key={index}>
          <td>{item.a}</td>
          <td>{item.b}</td>
          <td>{item.c}</td>
        </tr>
        ))}
      </tbody>

    </Table>
    </React.Fragment>
    );
  }
}

export default SimpleTable;