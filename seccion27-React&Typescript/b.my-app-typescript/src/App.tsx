import Todos from './components/Todos/Todos';
import Todo from './models/Todo'
import './App.css';

const ITEMS = [
  new Todo('learn react'),
  new Todo('learn something'),
]

function App() {
  return (
    <div className="App">
      <Todos items={ITEMS} />
    </div>
  );
}

export default App;
