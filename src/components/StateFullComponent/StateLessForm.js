import React, { Component } from 'react';
import {Form,Label,Input} from 'reactstrap';

const StateLessForm =({handleChange,handleSubmit})=>(
    <Form className="div-align">
        <Label>firstName</Label>
         <Input type="text" name="firstName"  onChange={(e) => handleChange(e)}/><br/>
         <Label>SecondName</Label>
        <Input type="text" name="secondName" onChange={(e) =>handleChange(e)}/><br/>
        <Label>Age</Label>
        <Input type="text" name="age" onChange={(e) =>handleChange(e)}/><br/>
        <Label>City</Label>
        <Input type="text" name="city" onChange={(e) =>handleChange(e)}/><br/>
        <button type="button" onClick={(e) =>handleSubmit(e)}>submit</button>
    </Form>

);
export default StateLessForm;

