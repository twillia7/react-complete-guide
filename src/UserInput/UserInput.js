import React from 'react';

const userInput = (props) => {
  return (
    <div className="userInput">
      <input type="text" onChange={props.change} value={props.username}></input>
    </div>
  )
};

export default userInput;