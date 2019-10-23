import { createReducer } from 'typesafe-actions';
import { User } from 'MyModels';
import { loadAuthAsync, logoutAuth, setUserAuth } from './actions';

export interface AuthState {
  loading: boolean;
  user?: User;
  message: string;
}

const initialState: AuthState = {
  loading: false,
  message: '',
  user: undefined,
};

export const authReducer = createReducer<AuthState>(initialState)
  .handleAction(loadAuthAsync.success, state => ({
    ...state,
    loading: false,
    message: '',
  }))
  .handleAction(loadAuthAsync.failure, (state, action) => ({
    ...state,
    loading: false,
    message: action.payload,
    user: undefined,
  }))
  .handleAction(loadAuthAsync.request, state => ({
    ...state,
    loading: true,
    message: '',
  }))
  .handleAction(setUserAuth, (state, action) => ({
    ...state,
    user: action.payload,
  }))
  .handleAction(logoutAuth, state => ({
    ...state,
    user: undefined,
  }));

export default authReducer;
