import React from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { StatusBar } from 'react-native';
import Routes from './routes';

import './config/ReactotronConfig';

import bucket from './store/index';

export default function App() {
  return (
    <Provider store={bucket.store}>
      <PersistGate persistor={bucket.persistor}>
        <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
        <Routes />
      </PersistGate>
    </Provider>
  );
}
