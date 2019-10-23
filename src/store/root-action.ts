import { routerActions } from 'react-router-redux';
import { createStandardAction } from 'typesafe-actions';
import * as todosActions from '../features/todos/actions';
import * as authActions from '../features/auth/actions';

export const emptyAction = createStandardAction('EMPTY_ACTION')();

export default {
  system: { noAction: emptyAction },
  router: routerActions,
  todos: todosActions,
  auth: authActions,
};
