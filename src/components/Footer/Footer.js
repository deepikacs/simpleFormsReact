import React, { Component } from 'react';
import { Row, Col, Container } from 'reactstrap';
import { NavLink } from 'react-router-dom';
import entaly from '../../icons/Entaly_logo_rev.png';
import './RootPage.scss';

class Footer extends Component {
  render() {
    const loggedIn = localStorage.getItem('token');
    return (
      <Container fluid className="footer-bgcolor footer navbar-fixed-bottom">
        <Row className="footer-row">
          <Col xs={12} sm={12} md={3} lg={2}>
            <a href="https://www.entaly.com/"><img src={entaly} alt="logo" className="footer-logo" /></a>
          </Col>
          <Col xs={12} sm={12} md={4} lg={6}>
            <span className="copy-rights "> &copy; 2018-19 All Rights Reserved,Entaly Inc</span>
          </Col>
          <Col xs={12} sm={12} md={5} lg={4} className="footer-text-align ">
            {/* {loggedIn
            && (
              <React.Fragment>
                <span className="separator">
                  <NavLink to="/confidentiality" className="footer-security">
                    Confidentiality
                  </NavLink>
                </span>
                <span className="separator">|</span>
              </React.Fragment>
            )
            }
            <span className="separator">
              <NavLink to="/security" className="footer-security">
                Security
              </NavLink>
            </span>
            <span className="separator">|</span>
            <span>
              <NavLink to="/capabilities" className="footer-security">
                Capabilities
              </NavLink>
            </span>
            <span className="separator">|</span>
            <span>
              <NavLink to="/termsofuse" className="footer-security">
                Terms of Use
              </NavLink>
            </span>
            <span className="separator">|</span>
            <span>
              <a href="mailto:feedback%40entaly.com?subject=Feedback-HYG&body=Hi%20there%2C%C2%A0%0A%0ASend%20us%20any%20comments%2C%20feedback%2C%20suggestions%2C%20or%20problems%20you%E2%80%99ve%20encountered%20on%20our%20website%20so%20that%20we%20can%20fix%20them%20right%20away.%C2%A0%0A%0AName*%0A%0AEmail*%0A%0APhone%20number*%C2%A0%0A%0AComments*%C2%A0%0A%0A%0ARegards%2C%C2%A0%0A%0AThe%20Entaly%20Team" className="footer-security">
                Feedback
              </a>
            </span>
            <span className="separator">|</span>
            <span>
              <a className="footer-security" href="mailto:contact@entaly.com?subject=Contact-HYG&body=Hi%20there%2C%20%0A%0AThank%20you%20for%20contacting%20Entaly.%20Please%20fill%20in%20the%20details%20below%20and%20send%20it%20to%20us%20and%20we%20will%20get%20in%20touch%20with%20you%20at%20the%20earliest.%20%0A%0AName*%0A%0AEmail*%0A%0APhone%20number*%20%0A%0AMessage*%20%0A%0A%0ARegards%2C%20%0A%0AEntaly%20Customer%20Support">Contact</a>
            </span> */}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Footer;