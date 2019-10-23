import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { User } from 'MyModels';
import { RxAxios } from '../shared/rx-axios';

export class AuthService {
  private user?: User;

  constructor(protected api: RxAxios) {}

  signIn(credentials: { login: string; password: string }): Observable<User> {
    const { login, password } = credentials;
    const user: User = {
      id: 1,
      name: 'admin',
    };

    return login === 'admin' && password === '123456'
      ? of(user).pipe(delay(1500))
      : timer(1500).pipe(mergeMap(() => throwError('Invalid login')));
  }

  setUser(user: User): void {
    console.log('AuthService.setUser', user);
    this.user = user;
  }

  isAuthenticated(): boolean {
    return !!this.user;
  }
}
