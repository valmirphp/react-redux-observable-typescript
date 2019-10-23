import { User } from 'MyModels';

import { createStandardAction, createAsyncAction } from 'typesafe-actions';

export const setUserAuth = createStandardAction('SET_USER_AUTH')<User>();

export const logoutAuth = createStandardAction('LOGOUT_AUTH')<void>();

export const loadAuthAsync = createAsyncAction(
  'LOAD_AUTH_REQUEST',
  'LOAD_AUTH_SUCCESS',
  'LOAD_AUTH_FAILURE'
)<{ login: string; password: string }, User, string>();
