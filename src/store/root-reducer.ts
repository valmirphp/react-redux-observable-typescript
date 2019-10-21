import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import todosReducer, { TodosState } from '../features/todos/reducer';
import history from '../routes/history';

export interface RotState {
  todos: TodosState;
  router: RouterState;
}

const rootReducer = combineReducers<RotState>({
  router: connectRouter(history),
  todos: todosReducer,
});

export default rootReducer;
