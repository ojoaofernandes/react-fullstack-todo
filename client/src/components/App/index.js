import React, { Component } from 'react';
import TitleBar from '../TitleBar';
import InputBar from '../InputBar';
import TodoList from '../TodoList';
import VisibilityFilter from '../VisibilityFilter';
import { ACTIVE } from '../../constants/visibilityFilterTypes';
import './index.css';

class App extends Component {
  render() {
    return (
      <div id="App" className="App">
        <TitleBar />
        <InputBar addTodo={(description) => alert(`Todo added: ${description}.`)} />
        <TodoList todos={[
          { id: 1, description: 'Foo' },
          { id: 2, description: 'Bar', completed: true },
          { id: 3, description: 'Baz' },
        ]} />
        <VisibilityFilter filter={ACTIVE} onFilterChange={(filter) => alert(`New filter: ${filter}`)} />
      </div>
    );
  }
}

export default App;
