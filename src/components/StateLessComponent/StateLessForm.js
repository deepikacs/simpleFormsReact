import React, { Component } from 'react';


const StateLessForm =({handleChange,handleSecond,handleAge,handleCity,handleSubmit})=>(
    <form>
         <input type="text" name="firstName"  onChange={(e) => handleChange(e)}/>
        <input type="text" name="secondName" onChange={(e) =>handleSecond(e)}/>
        <input type="text" name="age" onChange={(e) =>handleAge(e)}/>
        <input type="text" name="city" onChange={(e) =>handleCity(e)}/>
        <button onClick={(e) =>handleSubmit(e)}>submit</button>
    </form>

);
export default StateLessForm;

