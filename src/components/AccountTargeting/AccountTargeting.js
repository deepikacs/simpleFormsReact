import React, { Component } from 'react';
import AccountBar from './AccountBar';
import AccountTable from './AccountTable';
import Newproject from './AccountTargetNewProject';

class AccountTargeting extends Component {
  render() {
    return (
      <div>
         <AccountBar />
         {/* <AccountTable/> */}
         {/* <Newproject /> */}
      </div>
    );
  }
}

export default AccountTargeting;