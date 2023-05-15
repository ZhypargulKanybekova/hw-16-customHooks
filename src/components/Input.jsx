import React from "react";
import {useInput} from "../hooks/useInput";
import { styled } from "styled-components";



function Input() {
  const email = useInput("", "email");
  const password = useInput("", "password");
  const date = useInput("", "date");

  const onValide = {
    email: email.validate,
    password: password.validate,
    date:date.validate,
  };

  // const submitHandler = (e) => {
  //   e.preventDefault();
  // };

  return (
    
      <Generel>
        <div>
        <label htmlFor="email">Email</label>
          <Inputt
            type="email"
            id="email"
            value={email.value}
            onChange={email.onchange}
            onBlur={onValide.email}
          />
          <Button type="submit"onClick={onValide.email} >submit</Button>
        </div>
         
        
        {email.error && <span> {email.error}</span>}
        

        <div>
          <label htmlFor="password">Password</label>
          <Inputt
          id="password"
            type="password"
            value={password.value}
            onChange={password.onchange}
            onBlur={onValide.password}
          />
          <Button type="submit" onClick={onValide.password}>submit</Button>
        </div>
        {email.error && <span> {password.error}</span>}


        <div>
          <label htmlFor="date">Date</label>
          <Inputt
            type="date"
            value={date.value}
            onChange={date.onchange}
          />
          <Button type="submit" onClick={onValide.date}>submit</Button>
        </div> 
        {date.error && <span> {date.error}</span>}

      </Generel>
    
  );
}

export default Input;

const Generel = styled.div`
  width:600px;
  height: 400px;
  border-radius:11px;
  display: flex;
  flex-direction: column;
  align-items:center;
  justify-content: center;
  background-color: #cfbaba;
  gap: 20px;
`

const Inputt = styled.input`
  width:400px;
  height: 50px;
  text-align:start;

`
const Button = styled.button`
  width: 100px;
  height: 52px;
  background-color: #4444a5c8;
  color:white;
  font-size: 20px;
  border-radius:1px;
  border-color: #4444a5c8;
`