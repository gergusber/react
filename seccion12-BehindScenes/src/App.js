import React, { useState } from 'react';

import './App.css';
import Button from './components/UI/Button/Button'

function App() {
  const [showParagraph, setShowParagraph] = useState(false)
  const toggleP = () => {
    setShowParagraph(showParagraph => !showParagraph)
  }
  return (
    <div className="app">
      <h1>Hi there!</h1>
      {showParagraph && <p> holaa</p>}
      <Button onClick={toggleP} > toggle paragraph</Button>
    </div>
  );
}

export default App;
