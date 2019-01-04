import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Table} from 'reactstrap';
import './SimpleForm.css';
import SimpleTable from '../SimpleTable';

class SimpleForm extends Component {
  constructor(props){
    super(props);
    this.state={
      name1:'',
      name2:'',
      age1:'',
      array:[],
    };
    this.handleChange=this.handleChange.bind(this);
    this.handleChange1=this.handleChange1.bind(this);
    this.handleChange2=this.handleChange2.bind(this);
    this.submit=this.submit.bind(this);
  }

  handleChange(e){
    debugger;
    this.setState({name1:e.target.value});
    console.log(this.state.name1)
  }
  handleChange1(e){
    this.setState({name2:e.target.value});
    console.log(this.state.name2)
  }
  handleChange2(e){
    this.setState({age1:e.target.value});
    console.log(this.state.age1)
  }
 
  submit(e){
    e.preventDefault();
    const data=
    {
      a:this.state.name1,
      b:this.state.name2,
      c:this.state.age1
    }
    debugger;
    let x=this.state.array.push(data);
    this.setState({x});
  }
  render() {
    return (
      <React.Fragment>
    <Form className="div-align">
         <FormGroup>
        <Label>FirstName</Label>
        <Input type="text" id="fname" onChange={this.handleChange}/>
        </FormGroup>
        <FormGroup>
        <Label>LastName</Label>
        <Input type="text" id="lname" onChange={this.handleChange1}/>
        </FormGroup>
        <FormGroup>
        <Label>Age</Label>
        <Input type="number" id="age" onChange={this.handleChange2}/>
        </FormGroup>
        <FormGroup>
         <Label for="exampleSelect">city</Label>
         <Input type="select" name="select" id="exampleSelect">
            <option>Mysore</option>
             <option>Banglore</option>
            <option>Mandya</option>
          </Input>
    </FormGroup>
    <Button onClick={this.submit}>Submit</Button>
    </Form>
    {/* <SimpleTable  fname={this.state.name1} lname={this.state.name2} age={this.state.age1}/> */}
    <SimpleTable array={this.state.array}/>
   
    </React.Fragment>
    );
  }
}

export default SimpleForm;