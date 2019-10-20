import * as logger from './logger-service';
import * as todos from './todos-api-client';
import { api } from './api';

export default {
  logger,
  http: api,
  api: {
    todos,
  },
};
