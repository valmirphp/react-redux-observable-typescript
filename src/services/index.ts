import { TodoService } from './todo-service';
import { AuthService } from './auth-service';
import * as logger from './logger-service';
import { api } from './api';

const contextServices = {
  http: api,
  logger,
  todosApi: new TodoService(api),
  authApi: new AuthService(api),
};

export default contextServices;
