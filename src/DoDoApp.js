import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import DoDoForm from './DoDoForm';
import DoDoList from './DoDoList';
import useTodoState from './hooks/useTodoState';

function DoDoApp() {
  const initialTodos = [];

  const {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  } = useTodoState(initialTodos);


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
          <DoDoList todos={todos} deleteTodo={deleteTodo} toggleTodo={toggleTodo} editTodo={editTodo} />
        </Grid>
      </Grid>
    </Paper>
  );
}

export default DoDoApp;
