import React, { useContext } from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { DispatchContext } from './contexts/TodosContext';

function DoDoForm() {
  const dispatch = useContext(DispatchContext);
  const [task, updateTask, resetTask] = useInputState('');
  console.log('FORM RENDER!!!');
  return (
    <Paper style={{ margin: "1rem 0", padding: "0 1rem" }}>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          dispatch({ type: 'ADD', task });
          resetTask();
        }}
      >
        <TextField value={task} onChange={updateTask} margin="normal" label="Add new DoDo" fullWidth />
      </form>
    </Paper>
  );
};

export default DoDoForm;
