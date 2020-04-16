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
            <DoDoItem task={todo.task} key={todo.id} completed={todo.completed} />
            <Divider />
          </>
        ))}
      </List>
    </Paper>
  )
};

export default DoDoList;
