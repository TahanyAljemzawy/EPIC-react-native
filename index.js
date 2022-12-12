import React from 'react';
import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
//redux
import {Provider} from 'react-redux';
//redux-persist
import {PersistGate} from 'redux-persist/integration/react';
import { store, persistor } from './Store/Reducers/index';
//firebase notifications Methods
import { Create_Channel, Get_Channels, BK_MessageHandler } from './Notifications';



Create_Channel();
Get_Channels();
BK_MessageHandler();//Background notifications handler

const AppRedux = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <App />
    </PersistGate>
  </Provider>
);

AppRegistry.registerComponent(appName, () => AppRedux);
