import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { StyledAuthForm } from './auth.style';
import { loadAuthAsync } from '../actions';

type EventHandler = React.ReactEventHandler<HTMLInputElement>;

type Inputs = {
  login: string;
  password: string;
};

type State = {
  loading: boolean;
  message?: string;
};

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const { loading, message } = useSelector<RootState, State>(
    state => state.auth
  );
  const [inputs, setInputs] = useState<Inputs>({
    login: '',
    password: '',
  });

  const handleInputChange: EventHandler = ev => {
    setInputs({
      ...inputs,
      [ev.currentTarget.name]: ev.currentTarget.value,
    });
  };

  const signIn = (ev: React.FormEvent<HTMLFormElement>) => {
    ev.preventDefault();
    dispatch(loadAuthAsync.request(inputs));
  };

  return (
    <div>
      <h1>Authorization</h1>
      <StyledAuthForm onSubmit={signIn}>
        <fieldset>
          <legend>Auth form</legend>

          <div>
            <label htmlFor="login">Login</label> <br />
            <input
              type="text"
              id="login"
              name="login"
              value={inputs.login}
              onChange={handleInputChange}
            />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input
              type="password"
              id="password"
              name="password"
              value={inputs.password}
              onChange={handleInputChange}
            />
          </div>

          <p>
            <small>Please type with "admin" and "123456"</small>
          </p>

          <button type="submit" disabled={loading}>
            Login
          </button>

          {message && <p className="error">{message}</p>}
        </fieldset>
      </StyledAuthForm>
    </div>
  );
};

export default Login;
