import React, { useContext } from 'react';
import TextField from '@material-ui/core/TextField';
import useInputState from './hooks/useInputState';
import { TodosContext } from './contexts/TodosContext';

function DoDoEdit({ id, task, toggleIsEdit }) {
  const { editTodo } = useContext(TodosContext);
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
