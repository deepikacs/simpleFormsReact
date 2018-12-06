import React, { Component } from 'react';
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap';
  // import { Link, NavLink } from 'react-router-dom';
  import hygLogo from '../../icons/hyg.png';
  import './Header.css';

class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggleNavbar = this.toggleNavbar.bind(this);
        this.state = {
          collapsed: true
        };
      }
    
      toggleNavbar() {
        this.setState({
          collapsed: !this.state.collapsed
        });
      }
    
    render() {
      return (
        <div>
        <Navbar color="faded" light className="nav-size">
          {/* <NavbarBrand href="/" className="mr-auto">reactstrap</NavbarBrand> */}
          <img src={hygLogo} alt="logo" className="xs-view-imgalign" />
          {/* <NavbarToggler onClick={this.toggleNavbar} className="mr-2" /> */}
          {/* <Collapse isOpen={!this.state.collapsed} navbar> */}
            {/* <Nav navbar>
              <NavItem>
                <NavLink href="/components/" >AccountTargetting</NavLink>
              </NavItem>
              
            </Nav> */}
          {/* </Collapse> */}
        </Navbar>
      </div>
      );
    }
  }
  
  export default Header;