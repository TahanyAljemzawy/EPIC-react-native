//firebase notifications
import messaging, {firebase} from '@react-native-firebase/messaging';
import PushNotification from 'react-native-push-notification';

export const Create_Channel = () => {
  PushNotification.createChannel(
    {
      channelId: '1', 
      channelName: 'epic', 
      channelDescription: 'epic channel', 
      soundName: 'default',
      importance: 4, 
      vibrate: true, 
    },
    created => console.log(`createChannel returned '${created}'`), // (optional) callback returns whether the channel was created, false means it already existed.
  );
};

export const Get_Channels = () => {
  PushNotification.getChannels(function (channel_ids) {
    console.log(channel_ids); 
  });
};

export const Check_Permission = async () => {
  const enabled = await firebase.messaging().hasPermission();
  // If Premission granted proceed towards token fetch
  if (enabled) {
    getToken();
  } else {
    // If permission hasn’t been granted to our app, request user in requestPermission method.
    requestPermission();
  }
};
const getToken = async () => {
  // let fcmToken = await AsyncStorage.getItem('fcmToken');
  //if (!fcmToken) {
  fcmToken = await firebase.messaging().getToken();
  if (fcmToken) {
    // await AsyncStorage.setItem('fcmToken', fcmToken);
    console.log('fcmToken', fcmToken);//will do something else later
  }
  // }
};

const requestPermission = async () => {
  try {
    const authStatus = await messaging().requestPermission();
    const enabled =
      authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
      authStatus === messaging.AuthorizationStatus.PROVISIONAL;
      getToken();
  } catch (error) {
    console.log('permission rejected');//will do something else later 
  }
};

export const Notification_Listeners = async () => {
  messaging().onMessage(async remoteMessage => {
    displayNotification(remoteMessage);
    return Promise.resolve();
  });
  // Assume a message-notification contains a "type" property in the data payload of the screen to open<to the future updates)=> // navigation.navigate(remoteMessage.data.type);
  messaging().onNotificationOpenedApp(remoteMessage => {
    displayNotification(remoteMessage);
  });
};
const displayNotification = ({notification}) => {
  PushNotification.localNotification({
    title: notification.title,
    message: notification.body,
    priority: 'high',
    channelId: '1',
    largeIconUrl: notification.android.imageUrl,
    playSound: true,
    soundName: 'default',
  });
};

export const BK_MessageHandler = () => {
  messaging().setBackgroundMessageHandler(async remoteMessage => {
    displayNotification(remoteMessage);
    return Promise.resolve();
  });
};

export const FG_MessageHandler = () => {

  messaging().onMessage(async remoteMessage => {
    displayNotification(remoteMessage);
    return Promise.resolve();
  });
};
