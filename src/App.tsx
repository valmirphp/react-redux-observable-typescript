import React from 'react';
import TodosView from './features/todos/components/TodosView';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h2>Demo</h2>
      <TodosView />
    </div>
  );
};

export default App;
