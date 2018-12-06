import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText ,Table} from 'reactstrap';

class SingleComponent extends Component {
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
      <Table>
      <thead>
          <tr className="">
              <th>FName</th>
              <th>Lname</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
          {this.state.array.map((item,index)=>
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
  
  export default SingleComponent;