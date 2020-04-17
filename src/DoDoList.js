import React from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DoDoItem from './DoDoItem';

function DoDoList({ todos, deleteTodo, toggleTodo, editTodo }) {
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <>
              <DoDoItem
                {...todo}
                key={todo.id}
                deleteTodo={deleteTodo}
                toggleTodo={toggleTodo}
                editTodo={editTodo}
              />
              { i < todos.length - 1 && <Divider /> }
            </>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default DoDoList;
