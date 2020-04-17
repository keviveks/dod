import useLocalStorageState from './useLocalStorageState';

export default initialTodos => {
  const [todos, setTodos] = useLocalStorageState("todos", initialTodos);

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
  const editTodo = (id, task) => {
    const updatedTodo = todos.map(todo => todo.id === id ? {...todo, task} : todo);
    setTodos(updatedTodo);
  };

  return {
    todos,
    addTodo,
    deleteTodo,
    toggleTodo,
    editTodo,
  };
}
