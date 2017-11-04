import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';

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
    return (
      <Provider store={createStore(reducers)}>
        <LoginForm />
      </Provider>
    );
  }
}