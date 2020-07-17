import React from 'react';
import './App.scss';
import Name from './components/Name';
import Button from './components/Button';
import Webdev from './Pages/Webdev';
import Home from './Pages/Home';

function App() {
  return (
    <div className="App">
      <Name />
      <Button />
      <Home />
      <Webdev />
    </div>
  );
}

export default App;
