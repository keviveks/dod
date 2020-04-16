import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DoDoItem from './DoDoItem';

function DoDoList(props) {
  return (
    <Paper>
      <List>
        {props.todos.map(todo => (
          <>
            <DoDoItem
              key={todo.id}
              id={todo.id}
              task={todo.task}
              completed={todo.completed}
              deleteTodo={props.deleteTodo}
              toggleTodo={props.toggleTodo}
              editTodo={props.editTodo}
            />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
};

export default DoDoList;
