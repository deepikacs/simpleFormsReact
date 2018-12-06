import React, { Component } from 'react';
import StateLessForm from './StateLessForm';
import StateLessTable from './StateLessTable';

class StateLessComponent extends Component {
    constructor(props, context) {
        super(props, context);
        this.handleChange = this.handleChange.bind(this);
        this.handleSecond = this.handleSecond.bind(this);
        this.handleAge = this.handleAge.bind(this);
        this.handleCity = this.handleCity.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
          firstName: '',
          secondName: '',
          age: '',
          city: '',
          option:[],
         
          
        };
      }
     
      handleChange(e) {
         
        this.setState({ firstName: e.target.value });
      }
      handleSecond(e) {
        this.setState({ secondName: e.target.value });
      }
      handleAge(e) {
        this.setState({ age: e.target.value });
      }
      handleCity(e) {
        this.setState({ city: e.target.value });
      }
      handleSubmit(e){
        e.preventDefault();
        const app ={
            firstName:this.state.firstName,
            secondName:this.state.secondName,
            age:this.state.age,
            city:this.state.city
        };
        
        this.state.option.push(app);
        this.setState({option:this.state.option});
      }
    
  render() {
    return (
      <div className="">
     <StateLessForm 
     handleChange={e =>this.handleChange(e)}
     handleSecond={e =>this.handleSecond(e)}
     handleAge={e =>this.handleAge(e)}
     handleCity={e =>this.handleCity(e)}
     handleSubmit={e =>this.handleSubmit(e)}
     />
    <StateLessTable option={this.state.option}   />
         
      </div>
    );
  }
}

export default StateLessComponent;