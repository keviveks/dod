import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
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
      completed: false
    },
    {
      id: 3,
      task: 'Todo 3',
      completed: false
    },
  ];
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
      <DoDoList todos={initialToDo} />
    </Paper>
  );
}

export default DoDoApp;
