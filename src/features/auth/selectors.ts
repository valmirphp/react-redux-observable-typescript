// import { createSelector } from 'reselect';

import { AuthState } from './reducer';

export const getUser = (state: AuthState) => state.user;
