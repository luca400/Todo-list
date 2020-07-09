import React from "react";
import { ListItem, ListItemText, List } from "@material-ui/core";
import "./Todo.css";
function Todo(props) {
  return (
    <List className="todo__list">
      <ListItem>
        <ListItemText primary={props.text} secondary="Todo..." />
      </ListItem>
    </List>
  );
}

export default Todo;
