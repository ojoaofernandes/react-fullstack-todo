import Immutable from 'immutable';
import typeToReducer from 'type-to-reducer';
import {
  ADD_TODO,
  GET_TODOS,
  TOGGLE_TODO,
} from '../constants/todosActionTypes';
import { FULFILLED } from 'redux-promise-middleware';

const todosReducer = typeToReducer({
  [GET_TODOS]: {
    [FULFILLED]: (_, action) => Immutable.fromJS(action.payload)
  },
  [ADD_TODO]: {
    [FULFILLED]: (state, action) => state.push(Immutable.fromJS(action.payload))
  },
  [TOGGLE_TODO]: {
    [FULFILLED]: (state, action) => state.map(todo => {
      if (todo.get('id') === action.payload.id) {
        return Immutable.fromJS(action.payload);
      }

      return todo;
    })
  }
}, Immutable.List());

export default todosReducer;
