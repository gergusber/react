import React, { useState } from 'react';
import DemoOutput from './components/Demo/DemoOutput';
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
      <DemoOutput show={showParagraph} />
      <Button onClick={toggleP} > toggle paragraph</Button>
    </div>
  );
}

export default App;
