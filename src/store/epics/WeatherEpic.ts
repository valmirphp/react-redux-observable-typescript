import { Epic } from "redux-observable";
import { from, of } from 'rxjs';
import { switchMap, filter, map, catchError } from 'rxjs/operators';
import { ActionType, isActionOf } from 'typesafe-actions';

import * as actions from "../actions";

import { RootState } from "../reducers";

import { getWeather } from "../../shared/services/Api";

type Action = ActionType<typeof actions>;

const weatherGetEpic: Epic<Action, Action, RootState> = (action$, store) =>
  action$.pipe(
    filter(isActionOf(actions.weatherGetAction)),
    switchMap(action =>
      from(getWeather(action.payload.lat, action.payload.lng)).pipe(
        map(actions.weatherSetAction),
        catchError(error => of(actions.weatherErrorAction(error)))
      ),
    )
  );

export default [
  weatherGetEpic,
];
