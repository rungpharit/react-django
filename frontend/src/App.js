import React from 'react';
import './App.css';

import Todolists from './components/todolists';
import Header from './components/headers'

function App() {
  return (
    <div className="App">
      <Header/>
      <Todolists/>
    </div>
  );
}

export default App;
