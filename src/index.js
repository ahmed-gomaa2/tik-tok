import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import {applyMiddleware, createStore} from "redux";
import reducers from './reducers'
import thunk from "redux-thunk";
import {getFirebase, ReactReduxFirebaseProvider} from "react-redux-firebase";
import {Provider} from 'react-redux'
import firebase from "./firebase";
import {createFirestoreInstance} from "redux-firestore";

const store = createStore(reducers, applyMiddleware(thunk.withExtraArgument({getFirebase})))

const rrfprops = {
    firebase,
    config: {},
    dispatch: store.dispatch,
    createFirestoreInstance
 }

ReactDOM.render(
  <Provider store={store}>
      <ReactReduxFirebaseProvider {...rrfprops}>
          <App />
      </ReactReduxFirebaseProvider>
  </Provider>,
  document.querySelector('#root')
);
