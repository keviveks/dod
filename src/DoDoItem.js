import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import useToggleState from './hooks/useToggleState';
import DoDoEdit from './DoDoEdit';

function DoDoItem({ id, task, completed, deleteTodo, toggleTodo, editTodo }) {
  const [isEdit, toggleIsEdit] = useToggleState(false);
  return (
    <ListItem>
      {isEdit ? <DoDoEdit id={id} task={task} editTodo={editTodo} toggleIsEdit={toggleIsEdit} /> :
        <>
          <Checkbox checked={completed} onClick={() => toggleTodo(id) } />
          <ListItemText style={{ textDecoration: completed ? "line-through" : "none" }}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => deleteTodo(id)}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggleIsEdit}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      }
    </ListItem>
  );
}

export default DoDoItem;
