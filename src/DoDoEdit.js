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
        style={{
          width: '80%',
          marginLeft: '1rem'
        }}
      >
        <TextField value={value} onChange={updateValue} margin="normal" fullWidth autoFocus />
      </form>
  );
}

export default DoDoEdit;
