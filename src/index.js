import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'normalize.css';
import { GlobalStyles } from './global-styles';
import { firebase, db } from './lib/firebase.prod';
import { FirebaseContext } from './context/firebase';


ReactDOM.render(
  <>
    <FirebaseContext.Provider value={{ firebase, db }}>
      <GlobalStyles />
      <App />
    </FirebaseContext.Provider>
  </>,
  document.getElementById('root')
);
