import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, browserHistory } from 'react-router';
import Routes from './routes';
// import promise from 'redux-promise';

import App from './components/app';
import { rootReducer } from './reducers/root';

const createStoreWithMiddleware = applyMiddleware()(createStore);

const Main = () => {
  return(
    <Provider store={createStoreWithMiddleware(rootReducer)}>
      <Router history={browserHistory} routes={Routes}/>
    </Provider>
  )
}

//React Entrypoint
document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render( <Main/>, document.querySelector('#react-entry') );
});
