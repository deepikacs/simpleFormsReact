import React, { Component } from 'react';
import {
  Table, Row, Input, Container, Col,Breadcrumb, BreadcrumbItem,
} from 'reactstrap';
import Switch from "react-switch";
// import AcctTargetingActionBar from '../AcctTargetingActionBar';
// import AccTargetingTable from './AccTargetingTable';
import './AccountTargetNewProject.css';

class AcctTargetingNewProject extends Component {
  constructor(props){
    super(props);
    this.state={
      checked: false,
      orange:true,
    };
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(checked) {
    this.setState({ checked });
  }
  circleColor(value){
    this.setState({orange:value});
    console.log('hi')
  }
  
  render() {
    return (
      <Container>
        {/* <Row className="at-content-width mx-auto">
          <AcctTargetingActionBar
            location="newProject"
          />
        </Row> */}
        <Row className="mx-auto">
          <Col md={4}>
            <span>Project Name</span>
            <Input type="text" placeholder="Title of the Project" className="rectangle" />
          </Col>
          {/* 2nd  */}
          <Col md={3} className="border-box">
            <Row>
              <Col md={12} className="padd-botom10">
                <span>Choose one</span>
              </Col>
            </Row>
            <Row>
              {/* column 1 */}
              <Col md={8}  >
                <Row>
                  <Col md={12} >
                    <i className={this.state.orange ? 'material-icons circle font-18 orangeColor' : ' material-icons circle font-18'} onClick={() => this.circleColor(true)}>
                      panorama_fish_eye
                    </i>
                    <span className="Zipcode-align" onClick={() => this.circleColor(true)} >Zip Code</span>
                  </Col>
                </Row>
                <Row>
                  <Col md={12} >
                    <i className={this.state.orange ? 'material-icons circle font-18 ' : ' material-icons circle font-18 orangeColor'} onClick={() => this.circleColor(false)}>
                      panorama_fish_eye
                    </i>
                    <span className="Zipcode-align" onClick={() => this.circleColor(false)}>Account Name</span>
                  </Col>
                </Row>
              </Col>
              {/* column 2 */}

              <Col md={4}>
                <Input type="select" name="select" className="select-rectangle">

                  <option>Enter</option>
                  <option>option1</option>
                  <option>option2</option>
                  <option>option3</option>
                  <option>option4</option>
                </Input>
              </Col>
            </Row>
          </Col>
          <Col md={5}>
            <Row>
              <Col md={3}>
                <span>D&B data available</span>
                <Switch
                  checked={this.state.checked}
                  onChange={this.handleChange}
                  onColor="#FF8C00"
                  onHandleColor="#ffffff"
                  handleDiameter={30}
                  uncheckedIcon={false}
                  checkedIcon={false}
                  boxShadow="0px 1px 5px rgba(0, 0, 0, 0)"
                  activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                  height={20}
                  width={48}
                  className="react-switch"
                  id="material-switch"
                />
                {this.state.checked ? 'yes' : 'no'}
              </Col>

              {/* {this.state.checked?
             <React.Fragment>   */}
              <Col md={3}>
                <span className="font-12">Creation Date</span>
                <Input type="text" placeholder="11/12/2018" className="inputWidth" />
              </Col>
              <Col md={3}>
                <span className="font-12">Closed Date</span>
                <Input type="text" placeholder="dd/mm/yyyy" className="inputWidth closedDate" />
              </Col>
              <Col md={3}>
                <span className="font-12">Compaign ID</span>
                <Input type="text" placeholder="enter" className="inputWidth" />
              </Col>
              {/* </React.Fragment>  
              : 
              ''
             }   */}
            </Row>
          </Col>
        </Row>
        </Container>
    );
  }
}

export default AcctTargetingNewProject;
