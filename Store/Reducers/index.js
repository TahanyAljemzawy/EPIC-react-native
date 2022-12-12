import { combineReducers } from 'redux';
import UserReducer from './LoginScreen'
import TeamReducer from './TeamViewScreen'
import ScanReducer from './ScanScreen'
import RoomsReducer from './RoomsViewScreen'
//redux
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk';
//redux-persist
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
//firebase notifications Methods

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist:['user','scan','rooms']
};

const rootReducer = combineReducers({
    user: UserReducer,
    team: TeamReducer,
    scan: ScanReducer,
    rooms: RoomsReducer,
})

export const persistedReducer = persistReducer(persistConfig, rootReducer);
const middleware = [thunk];
export const store = createStore(persistedReducer, applyMiddleware(...middleware));
export let persistor = persistStore(store);




