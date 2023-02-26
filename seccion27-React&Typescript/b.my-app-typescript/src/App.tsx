import Todos from './components/Todos/Todos';
import Todo from './models/Todo'
import './App.css';
import NewTodo from './components/NewTodo/NewTodo';
import { useState } from 'react';
 
function App() {
  const [todos, setTodos] = useState<Todo[]>([]);

  const onAddTodoToListHandler = (text: string) => {
    const newTodo = new Todo(text);
    setTodos(
      (prev) => {
        return prev.concat(newTodo)
      }
    )
  }

  const onRemoveTodoToListHandler = (id: string) => {
    setTodos(
      (prev) => { 
        return prev.filter(todo => todo.id !== id);
      }
    )
  }

  return (
    <div className="App">
      <NewTodo onAddTodo={onAddTodoToListHandler} />
      <Todos items={todos} onRemove={onRemoveTodoToListHandler} />
    </div>
  );
}

export default App;
