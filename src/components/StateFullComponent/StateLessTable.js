import React, { Component } from 'react';
import {Table,Row,Col} from 'reactstrap';
import './StateFullComponent.scss';

const StateLessTable =({option,editClicked,handleChange})=>(
    <Table bordered>
    <thead>
      <tr>
        {/* <th>#</th> */}
        <th>First Name</th>
        <th>Last Name</th>
        <th>Age</th>
        <th>City</th>
        <th>id</th>
        <th>myid</th>
      </tr>
    </thead>
    <tbody>
    {option.map((item,index) =>
       (
       <tr className="table-row" key={item.id}>
      {/* <tr> */}
       <th scope="row">{index}</th>
       <td >
        {item.editClicked?
          <input type="text" name="firstName1" onChange={(e) => handleChange(e,index)}  value={item.firstName1}/>
          : item.firstName
        }
       </td>
       <td>{item.secondName}</td>
       <td>{item.age}</td>
       <td>{item.city}</td>
       <td>{item.id}</td>
       <td>{item.myid}</td>
       <td>
         {item.editClicked?
       <div>
          <button type="button" className="save">save</button>
          <button type="button" className="cancel">cancel</button>
       </div>
       :
       <div><button type="button" className="edit" onClick={()=> editClicked(index)}>Edit</button>
       <button type="button" className="delete">Delete</button></div>
         }
       </td>

     </tr>
       ))}
    </tbody>
  </Table>
);
export default StateLessTable;