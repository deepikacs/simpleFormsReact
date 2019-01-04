import React, { Component } from 'react';
import StateLessForm from './StateLessForm';
import StateLessTable from './StateLessTable';
import HttpWrapper from './HttpWrapper';

class StateLessComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        // this.handleSecond = this.handleSecond.bind(this);
        // this.handleAge = this.handleAge.bind(this);
        // this.handleCity = this.handleCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.getCustomerData = this.getCustomerData.bind(this);
        this.editClicked=this.editClicked.bind(this);
        this.tableValueChange=this.tableValueChange.bind(this);
        this.state = {
          firstName: '',
          secondName: '',
          age: '',
          city: '',
          option:[],
          editClicked:false,
          firstName1:''
          };
      }
     
      handleChange(e) {
         
        this.setState({[e.target.name]: e.target.value });
      }
      // handleSecond(e) {
      //   this.setState({ secondName: e.target.value });
      // }
      // handleAge(e) {
      //   this.setState({ age: e.target.value });
      // }
      // handleCity(e) {
      //   this.setState({ city: e.target.value });
      // }
      
      // handleSubmit(e){
      //   e.preventDefault();
      //   const app ={
      //       firstName:this.state.firstName,
      //       secondName:this.state.secondName,
      //       age:this.state.age,
      //       city:this.state.city
      //   };
        
      //   this.state.option.push(app);
      //   this.setState({option:this.state.option});
      // }

      // onclick of submit button backend connection
      handleSubmit(e){
        console.log('submit')
        const reqobj={
          firstName: this.state.firstName,
          secondName: this.state.secondName,
          age: this.state.age,
          city: this.state.city,
          // myid:this.state.myid,
        };
        
      HttpWrapper('POST', 'postcustomerdata', reqobj)
      .then(res => {
        console.log(res);
        if(res.status === 200) {
          this.getCustomerData();
        }
      });
    }
    
    getCustomerData() {
      HttpWrapper('GET', 'getcustomerdata', '')
      .then(res => {
        console.log(res);
        this.setState({
          option: res.data

        })
        // console.log(this.state.option);
      })
    }
    editClicked(index){
      const currentState = this.state;
    currentState.option[index].editClicked = !currentState.option[index].editClicked;
    this.setState(currentState);
      // this.setState({editClicked:true});
    }
    tableValueChange(e,index){
      const currentState = this.state;
      this.state.option[index][e.target.name] = e.target.value;
      this.setState(this.state);
    }

  render() {
    return (
      <div>
     <StateLessForm 
     handleChange={e =>this.handleChange(e)}
     handleSubmit={e =>this.handleSubmit(e)}
     />
     <button type="button" onClick={this.getCustomerData}>Load Table</button>
     
    <StateLessTable option={this.state.option} 
     editClicked={(index)=>this.editClicked(index)} 
     handleChange={(e,index)=>this.tableValueChange(e,index)}/>
         
      </div>
    );
  }
}

export default StateLessComponent;