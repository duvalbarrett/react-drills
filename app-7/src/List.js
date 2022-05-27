import React from "react";
import { Todo } from "./Todo";

export const List = (props) => {
  const displayList = props.tasks.map((element, index) => {
    return <Todo task={element} key={index} />;
  });

  return <div>{displayList}</div>;
};
