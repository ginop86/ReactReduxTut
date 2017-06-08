/*import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import App from './components/app';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <App />
  </Provider>
  , document.querySelector('.container'));*/





import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from '../src/components/search_bar'

const App = function() {
  return <div>
    <SearchBar />
  </div>;
}

ReactDOM.render(<App />, document.querySelector('.container'));