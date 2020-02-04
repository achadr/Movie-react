import React from 'react';
import Movies from "./containers/Movies"
import Filter from "./containers/Filter"
import './App.css';

function App(props) {
  return (
    <div className="App">
      <Filter/>
      <Movies/>
    </div>
  );
}

export default App;
