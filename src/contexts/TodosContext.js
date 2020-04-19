import React, { createContext } from 'react';
import useTodoState from '../hooks/useTodoState';

export const TodosContext = createContext();

export function TodosProvider(props) {
  const todoState = useTodoState([]);
  return (
    <TodosContext.Provider value={todoState}>
      {props.children}
    </TodosContext.Provider>
  );
};
