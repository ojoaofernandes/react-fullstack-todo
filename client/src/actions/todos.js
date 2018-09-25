import * as api from '../api/todos';
import {
  ADD_TODO,
  GET_TODOS,
  TOGGLE_TODO,
} from '../constants/todosActionTypes';

export const addTodo = description => ({
  type: ADD_TODO,
  payload: api.addTodo({ description }),
});

export const getTodos = filter => ({
  type: GET_TODOS,
  payload: api.getTodos(filter),
});

export const toggleTodo = todo => {
  const newCompleted = !todo.get('completed');
  const newTodo = todo.set('completed', newCompleted);

  return {
    type: TOGGLE_TODO,
    payload: api.setTodo(newTodo.toJS()),
  };
};
