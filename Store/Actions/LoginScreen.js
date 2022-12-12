import * as actionTypes from '../Types/index';
import { getUserData, getPost, sendPost } from '../Services/index';
import RNRestart from 'react-native-restart';
import AsyncStorage from '@react-native-async-storage/async-storage';


export const fetchUserData = () => dispatch => {
  getUserData()
    .then(data => {
      dispatch({
        type: actionTypes.FETCH_USERS_INFO,
        usersInfo: data,
      });
    })
    .catch(err => {
      dispatch({
        type: actionTypes.ON_LOGIN_FAILD,
        error: err,
      });
    });
};

export const checkLogin = (password, email, navigation) => (
  dispatch,
  getState,
) => {
  dispatch({
    type: actionTypes.CHECK_LOGIN_LOADING,
  });

  const usersInfoState = getState().user.usersInfo;
  const loggedUserData = usersInfoState.find(
    user => user.email === email.toLowerCase() && password === user.password,
  );

  if (loggedUserData) {
    //incase the user pass
    dispatch({
      type: actionTypes.CHECK_LOGIN,
      error: '',
      userData: loggedUserData,
    });
    navigation.replace('MainStack');
  } else {
    dispatch({
      type: actionTypes.ON_LOGIN_FAILD,
      error: 'Invalid Inputs',
    });
  }
};


export const onLogout = () => dispatch => {
  dispatch({
    type: actionTypes.ON_LOGOUT,
  });
};

const storeData = async (language) => {
  try {
    await AsyncStorage.setItem('userLanguage', language);
  } catch (e) {
    console.log(e);
  }
}

export const switchLanguage = (switchState) => dispatch => {

  const currentLanguage = switchState ? 'ar' : 'en' ;
  console.log('action', currentLanguage);
  storeData(currentLanguage);
  
  dispatch({
    type: actionTypes.SWITCH_LANGUAGE, 
    isRTL: switchState,
    currentLanguage: switchState ? 'ar' : 'en', 
  }); 

     RNRestart.Restart();
}


export const getFakedPost = async()=> {
    try {
      const posts = await getPost();
      console.log(' get pots ',posts);
    } catch (error) {
      console.log(error);
    }
}


export const postFakedPost = async () => {

  const newPost = {
    title: 'foo',
    body: 'bar',
    userId: 1,
  }


  try {
    const post = await sendPost(newPost);
    console.log(' new posts created',post );
  } catch (error) {
    console.log(error);
  }
}
