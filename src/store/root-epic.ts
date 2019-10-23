import { combineEpics } from 'redux-observable';

import * as todosEpics from '../features/todos/epics';
import * as authEpics from '../features/auth/epics';

export default combineEpics(
  ...Object.values(todosEpics),
  ...Object.values(authEpics)
);
