import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import reducers from './src/reducers';
import LoginForm from './src/components/LoginForm';

export default class App extends Component {
  
  componentWillMount() {
    const config = {
      apiKey: "AIzaSyBnvbMMKVMhx-iNkD85IFCfOJMfxZcQrnw",
      authDomain: "manager-fa4a4.firebaseapp.com",
      databaseURL: "https://manager-fa4a4.firebaseio.com",
      projectId: "manager-fa4a4",
      storageBucket: "manager-fa4a4.appspot.com",
      messagingSenderId: "277427456776"
    };
    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}