import React from 'react';
import './App.css';

import Home from './views/home/Home';
import Home2 from './views/home/Home2'

function App() {
  return (
    <div className="App">
        <Home msg="Componente Home #01"></Home>
        <Home2 msg="Componente Home #02"></Home2>
    </div>
  );
}

export default App;
