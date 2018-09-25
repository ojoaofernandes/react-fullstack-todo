import * as api from '../api/todos';
import {
  ADD_TODO,
  GET_TODOS,
} from '../constants/todosActionTypes';

export const addTodo = description => ({
  type: ADD_TODO,
  payload: api.addTodo({ description })
});

export const getTodos = () => ({
  type: GET_TODOS,
  payload: api.getTodos()
});
