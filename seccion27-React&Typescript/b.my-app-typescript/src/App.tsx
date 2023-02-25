import Todo from './components/Todos/Todos';

import './App.css';

const ITEMS = [
  'learn react',
  'learn something',
]

function App() {
  return (
    <div className="App">
      <Todo items={ITEMS} />
    </div>
  );
}

export default App;
