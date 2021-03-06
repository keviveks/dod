import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import DoDoItem from './DoDoItem';
import { TodosContext } from './contexts/TodosContext';

function DoDoList() {
  const todos = useContext(TodosContext);
  console.log('LIST RENDER!!!');
  if (todos.length)
    return (
      <Paper>
        <List>
          {todos.map((todo, i) => (
            <React.Fragment key={i}>
              <DoDoItem
                {...todo}
                key={todo.id}
              />
              { i < todos.length - 1 && <Divider /> }
            </React.Fragment>
          ))}
        </List>
      </Paper>
    );
  return null;
};

export default DoDoList;
