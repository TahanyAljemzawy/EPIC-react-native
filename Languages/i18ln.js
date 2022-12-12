import I18n from 'react-native-i18n';
import en from './English.json';
import ar from './Arabic.json';
import {store} from '../Store/Reducers/index';
import { I18nManager } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


I18n.fallbacks = true;

I18n.translations = {
  en,
  ar
};
/*
const userState = store.getState().user;

I18n.locale = userState.language ;

I18nManager.swapLeftAndRightInRTL(userState.isRTL);
I18nManager.allowRTL = userState.isRTL;
console.log(userState.language, 'i18')
*/
const getData = async () => {
  try {
    const storedLanguage = await AsyncStorage.getItem('userLanguage');
    I18n.locale = storedLanguage || 'en';
    I18nManager.forceRTL = storedLanguage.indexOf('ar') === 0; 
   console.log(storedLanguage,'current', I18nManager.forceRTL);
  } catch (error) {
    console.log(error);
  }
}

getData();


export const isRTL = I18nManager.isRTL;

export const strings = (name, params = {})=> {
  return I18n.t(name, params);
};


export default I18n;






