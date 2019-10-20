import { Epic } from 'redux-observable';
import { of } from 'rxjs';
import { filter, map, catchError, mergeMap } from 'rxjs/operators';
import { RootAction, RootState, Services, isActionOf } from 'typesafe-actions';

import { loadTodosAsync, saveTodosAsync } from './actions';
import { getAllTodos } from './selectors';

export const loadTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(loadTodosAsync.request)),
    mergeMap(() =>
      api.todos.loadSnapshot().pipe(
        map(loadTodosAsync.success),
        catchError((message: string) => of(loadTodosAsync.failure(message)))
      )
    )
  );

export const saveTodosEpic: Epic<
  RootAction,
  RootAction,
  RootState,
  Services
> = (action$, state$, { api }) =>
  action$.pipe(
    filter(isActionOf(saveTodosAsync.request)),
    mergeMap(() =>
      api.todos.saveSnapshot(getAllTodos(state$.value.todos)).pipe(
        map(saveTodosAsync.success),
        catchError((message: string) => of(saveTodosAsync.failure(message)))
      )
    )
  );
