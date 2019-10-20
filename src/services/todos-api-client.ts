import { Todo } from 'MyModels';
import { forkJoin, Observable, throwError } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { api } from './api';

export function loadSnapshot(): Observable<Todo[]> {
  return api.get<Todo[]>('/todos');
}

export function saveSnapshot(data: Todo[]): Observable<Todo[]> {
  const unchanged = data.filter(todo => !todo.isNew && !todo.isDeleted);

  const httpMultiSave = data
    .filter(todo => todo.isNew && !todo.isDeleted)
    .map(todo => ({ id: todo.id, title: todo.title }))
    .map(todo => api.post<Todo>(`/todos`, todo));

  const httpMultiDelete = data
    .filter(todo => !todo.isNew && todo.id && todo.isDeleted)
    .map(todo => api.delete<undefined>(`/todos/${todo.id}`));

  const requests: any[] = [...httpMultiDelete, ...httpMultiSave];

  if (requests.length === 0) {
    return throwError('oops! Empty action!');
  }

  return forkJoin(requests).pipe(
    tap(d => console.log('tap fork join', d)),
    map(results => results.filter((r: any) => r && r.id) as Todo[]),
    map(todos => [...todos, ...unchanged])
  );
}
