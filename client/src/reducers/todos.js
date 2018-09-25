import Immutable from 'immutable';
import typeToReducer from 'type-to-reducer';
import {
  ADD_TODO,
  GET_TODOS,
} from '../constants/todosActionTypes';
import { FULFILLED } from 'redux-promise-middleware';

const todosReducer = typeToReducer({
  [GET_TODOS]: {
    [FULFILLED]: (_, action) => Immutable.fromJS(action.payload)
  },
  [ADD_TODO]: {
    [FULFILLED]: (state, action) => state.push(Immutable.fromJS(action.payload))
  }
}, Immutable.List());

export default todosReducer;
