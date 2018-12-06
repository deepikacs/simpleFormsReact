import React, { Component } from 'react';
import ReactPaginate from 'react-paginate';
import {
  Table,
} from 'reactstrap';
import './AccountTargeting.css';

class AccountTable extends Component {
  render() {
    return (
      <div> 
      <Table hover responsive className="div-align" >
        <thead>
        <tr className="first-row-color">
            <th>Project Name</th>
            <th>Creation Date</th>
            <th>Closed Date</th>
            <th>Campaign ID</th>
            <th>Status</th>
            <th>Report</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="project-number">
            <td scope="row">Project Number 3</td>
            <td>01/01/2018</td>
            <td>02/02/2019</td>
            <td>-</td>
            <td>Open</td>
            <td className="view-report-style">View Report</td>
          </tr>
          
          <tr className="project-number">
            <td scope="row">Project Number 2</td>
            <td>06/01/2018</td>
            <td>08/01/2018</td>
            <td>145</td>
            <td>Closed</td>
            <td className="view-report-style">View Report</td>
            <td></td>
          </tr>
          <tr className="project-number">
            <td scope="row">Project Number 1</td>
            <td>03/01/2018</td>
            <td>09/01/2018</td>
            <td>145</td>
            <td>Closed</td>
            <td className="view-report-style">View Report</td>
            <td></td>
          </tr>
      </tbody>
      </Table>
      <div className="pagination-alignment">
      <ReactPaginate previousLabel={"prev"}
              nextLabel={"next"}
              previousLinkClassName={"prev1-textcolor"}
              nextLinkClassName={"next1"}
              breakLabel={<a href="">...</a>}
              breakClassName={"break-me"}
              pageLinkClassName={"def"}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={this.handlePageClick}
              containerClassName={"pagination"}
              subContainerClassName={"pages pagination "}
              activeClassName={"active abc"} />
              </div>
    </div>
    );
  }
}

export default AccountTable;