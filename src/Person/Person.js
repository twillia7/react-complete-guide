import React from 'react';
import styled from 'styled-components';
import './Person.css';


const StyleDiv = styled.div`
  width: 60%; 
  margin: 16px auto;
  border: 1px solid #EEEEEE;
  box-shadow: 0 2px 3px #CCCCCC;
  text-align: center;
  padding: 16px; 

  @media (min-width: 500px) {
    width: 450px;
  }
`;

const person = (props) => {
  // const style = {
  //   '@media (min-width: 500px)' : {
  //     width: '450px'
  //   }
  // };
  return (
    // <div className="Person" style={style}>
    <StyleDiv>
      <p onClick={props.click}>Name: {props.name}, Age: {props.age}</p>
      <p>{props.children}</p>
      <input type="text" onChange={props.changed} value={props.name}/>
      <button class="button">HERE</button>
    </StyleDiv>
  )
};

export default person;