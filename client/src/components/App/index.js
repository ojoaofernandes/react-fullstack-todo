import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import InputBar from '../../containers/InputBar';
import TodoList from '../../containers/TodoList';
import VisibilityFilter from '../VisibilityFilter';
import { ACTIVE } from '../../constants/visibilityFilterTypes';
import './index.css';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar />
        <TodoList />
        <VisibilityFilter filter={ACTIVE} onFilterChange={(filter) => alert(`New filter: ${filter}`)} />
      </div>
    );
  }
}

export default App;
