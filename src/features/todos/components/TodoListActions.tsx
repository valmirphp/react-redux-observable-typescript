import React from 'react';
import { RootState } from 'typesafe-actions';

import { loadTodosAsync, saveTodosAsync } from '../actions';
import { useDispatch, useSelector } from 'react-redux';

const mapStateToProps = (state: RootState): State => ({
  isLoading: state.todos.isLoadingTodos,
});

type State = {
  isLoading: boolean;
};

export default () => {
  const { isLoading } = useSelector<RootState, State>(mapStateToProps);
  const dispatch = useDispatch();
  const loadTodos = () => dispatch(loadTodosAsync.request());
  const saveTodos = () => dispatch(saveTodosAsync.request());

  return (
    <section>
      <button type="button" onClick={() => loadTodos()} disabled={isLoading}>
        Load snapshot
      </button>
      &nbsp;
      <button type="button" onClick={() => saveTodos()} disabled={isLoading}>
        Save snapshot
      </button>
    </section>
  );
};
