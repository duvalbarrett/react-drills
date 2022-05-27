import React from "react";

export const Todo = (props) => {

  return (
    <div>{props.task}</div>
      
  );
};



// Class Component Solution

// import React, {Component} from 'react';

// export default class ToDo extends Component {
//   render() {
//     return <p>{this.props.task}</p>;
//   }
// }