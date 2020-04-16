import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DoDoForm from './DoDoForm';
import DoDoList from './DoDoList';

function DoDoApp() {
  const initialToDo = [
    {
      id: 1,
      task: 'Todo 1',
      completed: false
    },
    {
      id: 2,
      task: 'Todo 2',
      completed: true
    },
    {
      id: 3,
      task: 'Todo 3',
      completed: false
    },
  ];
  const [todos, setTodos] = useState(initialToDo);
  const addTodo = task => {
    setTodos([...todos, { id: todos.length + 1, task: task, completed: false }]);
  };
  const deleteTodo = id => {
    const updatedTodo = todos.filter(todo => todo.id !== id);
    setTodos(updatedTodo);
  };
  const toggleTodo = id => {
    const updatedTodo = todos.map(todo => todo.id === id ? {...todo, completed: !todo.completed } : todo);
    setTodos(updatedTodo);
  };
  return (
    <Paper
      style={{
        padding: 0,
        margin: 0,
        height: '100vh',
        backgroundColor: '#fafafa'
      }}
    >
      <AppBar color="primary" position="static" style={{ height: '64px' }}>
        <Toolbar>
          <Typography color="inherit">DoD - a ToDo App</Typography>
        </Toolbar>
      </AppBar>
      <Grid container justify="center" style={{ marginTop: '1rem' }}>
        <Grid item xs={11} md={8} lg={4}>
          <DoDoForm addTodo={addTodo} />
          <DoDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DoDoApp;
