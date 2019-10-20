import { TodoService } from './todo-service';
import * as logger from './logger-service';
import { api } from './api';

export default {
  http: api,
  logger,
  api: {
    todos: new TodoService(api),
  },
};
