import React from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';

function DoDoEdit({ id, task, editTodo, toggleIsEdit }) {
  const [value, updateValue, resetValue] = useInputState(task);
  return(
    <form
        onSubmit={(e) => {
          e.preventDefault();
          editTodo(id, value);
          resetValue();
          toggleIsEdit();
        }}
      >
        <TextField value={value} onChange={updateValue} margin="normal" fullWidth />
      </form>
  );
}

export default DoDoEdit;
