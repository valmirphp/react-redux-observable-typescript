import { of } from 'rxjs';
import { catchError, filter, map, mergeMap } from 'rxjs/operators';
import { IEpicRoot, isActionOf } from 'typesafe-actions';

import { loadAuthAsync, logoutAuth, setUserAuth } from './actions';
import { push } from 'connected-react-router';
import { emptyAction } from '../../store/root-action';

export const loadAuthEpic: IEpicRoot = (action$, state$, { authApi }) =>
  action$.pipe(
    filter(isActionOf(loadAuthAsync.request)),
    mergeMap(action =>
      authApi.signIn(action.payload).pipe(
        mergeMap(user =>
          of(loadAuthAsync.success(user), setUserAuth(user), push('/todos'))
        ),
        catchError((message: string) => of(loadAuthAsync.failure(message)))
      )
    )
  );

export const setUserAuthEpic: IEpicRoot = (action$, state$, { authApi }) =>
  action$.pipe(
    filter(isActionOf(setUserAuth)),
    map(action => {
      authApi.setUser(action.payload);
      return emptyAction();
    })
  );

export const logoutAuthEpic: IEpicRoot = (action$, state$, { authApi }) =>
  action$.pipe(
    filter(isActionOf(logoutAuth)),
    map(action => {
      authApi.logout();
      return push('/');
    })
  );
