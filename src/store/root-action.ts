import { routerActions } from 'react-router-redux';
import { createStandardAction } from 'typesafe-actions';
import * as todosActions from '../features/todos/actions';
import * as authActions from '../features/auth/actions';

export const noAction = createStandardAction('NONE')();

export default {
  system: { noAction },
  router: routerActions,
  todos: todosActions,
  auth: authActions,
};
