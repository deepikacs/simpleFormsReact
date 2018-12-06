import React, { Component } from 'react';
import {
  Table,Breadcrumb,BreadcrumbItem
} from 'reactstrap';
import './AccountTargeting.css';
import AccountTable from './AccountTable';
import Newproject from './AccountTargetNewProject';

class AccountBar extends Component {
  constructor(){
    super();
    this.state={
      new:false,
    };
  }
  newProject(){
    console.log("hi")
    this.setState({new:'!this.state.new'});
  }
  render() {
    return (
      <React.Fragment>
      <Table borderless className="cna-action-table table-height">
      <tbody>
        <tr>
          <td style={{ width: '2%' }} />
          <td>
          <Breadcrumb>
          <BreadcrumbItem><a href="#">Dashboard</a></BreadcrumbItem>
         <BreadcrumbItem><a href="#">AccountTarget</a></BreadcrumbItem>
          <BreadcrumbItem active>Projects</BreadcrumbItem>
          </Breadcrumb>
            {/* <span className="act-action-text">Dashboard>AccountTarget>Projects</span> */}
          </td>
          <td className="float-right margin-newproject">
            <span className="newproject" onClick={()=> this.newProject()}>New Project</span>
          </td>
        </tr>
      </tbody>
    </Table>
    {this.state.new? <Newproject /> :<AccountTable/>}
    </React.Fragment>
    );
  }
}

export default AccountBar;
