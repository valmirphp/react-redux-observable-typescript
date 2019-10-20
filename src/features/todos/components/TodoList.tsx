import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'typesafe-actions';
import { Todo } from 'MyModels';
import * as selectors from '../selectors';
import * as actions from '../actions';
import TodoListItem from './TodoListItem';

type State = {
  isLoading: boolean;
  todos: Todo[];
};

const mapStateToProps = (state: RootState): State => ({
  isLoading: state.todos.isLoadingTodos,
  todos: selectors.getActiveTodos(state.todos),
});

const getStyle = (): React.CSSProperties => ({
  textAlign: 'left',
  margin: 'auto',
  maxWidth: 500,
});

export default () => {
  const { isLoading, todos } = useSelector<RootState, State>(mapStateToProps);
  const dispatch = useDispatch();
  const removeTodo = (id: string) => dispatch(actions.removeTodo(id));

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <ul style={getStyle()}>
      {todos.map(todo => (
        <li key={todo.id}>
          <TodoListItem
            title={todo.title}
            onRemoveClick={() => removeTodo(todo.id)}
          />
        </li>
      ))}
    </ul>
  );
};
