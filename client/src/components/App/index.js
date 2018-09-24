import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import InputBar from '../InputBar';
import './index.css';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar addTodo={(description) => alert(`Todo added: ${description}.`)} />
      </div>
    );
  }
}

export default App;
