import React, { Component } from 'react';
import {Table} from 'reactstrap';

const StateLessTable =({option})=>(
    <Table bordered>
    <thead>
      <tr>
        <th>#</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tbody>
    {option.map((item,index) =>
       (
       <tr key={index}>
       <th scope="row">{index}</th>
       <td>{item. firstName}</td>
       <td>{item.secondName}</td>
       <td>{item.age}</td>
       <td>{item.city}</td>
     </tr>
       ))}
    </tbody>
  </Table>
);
export default StateLessTable;