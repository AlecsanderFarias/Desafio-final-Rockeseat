import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';

import './config/ReactotronConfig';

import bucket from './store/index';

import App from './App';

export default function Index() {
  return (
    <Provider store={bucket.store}>
      <PersistGate persistor={bucket.persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <App />
      </PersistGate>
    </Provider>
  );
}
