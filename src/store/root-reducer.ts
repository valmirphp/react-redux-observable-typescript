import { combineReducers } from 'redux';
import { connectRouter, RouterState } from 'connected-react-router';

import todosReducer, { TodosState } from '../features/todos/reducer';
import authReducer, { AuthState } from '../features/auth/reducer';
import history from '../routes/history';

export interface RotState {
  todos: TodosState;
  router: RouterState;
  auth: AuthState;
}

const rootReducer = combineReducers<RotState>({
  router: connectRouter(history),
  todos: todosReducer,
  auth: authReducer,
});

export default rootReducer;
