import React from 'react';
import './App.css';
import Routes from './routes';
import store from './store';
import { Provider } from 'react-redux';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <div className="App">
        <Routes />
      </div>
    </Provider>
  );
};

export default App;
