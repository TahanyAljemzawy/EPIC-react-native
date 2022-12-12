import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ActivityIndicator,
  SafeAreaView,
  Image,
} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Colors from '../constants/Colors';
import logo from '../assests/loginLogo.png';
import {fetchUserData, checkLogin} from '../Store/Actions/index';
import {strings} from '../Languages/i18ln';
import Entypo from 'react-native-vector-icons/Entypo';

const LoginScreen = props => {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [display, setDisplay] = useState(false);
  const [showDelete, setShowDelete] = useState(false);
  const options = ['@aspire-infotech.net', '@aspire-services.net'];
  const [namePart, setNamePart] = useState('');
  const [emailPart, setEmailPart] = useState('');

  const {error, loading} = useSelector(state => ({
    error: state.user.error,
    loading: state.user.loading,
  }));
  const [filteredEmails, setFilteredEmails] = useState([]);

  useEffect(() => {
    dispatch(fetchUserData());
    setFilteredEmails(options)
  }, [dispatch]);

  const onPassHandler = value => {
    setPassword(value);
  };

  const sliceNameEmail = (email, atPosition) => {

    if (atPosition >= 0) {
      setNamePart(email.slice(0, atPosition));
      return true;
    } else {
      setNamePart(email);
      return false;
    }

  };

  const onNameHandler = value => {
    setEmail(value);
    let atPosition = value.search('@');

    const isAtIn = sliceNameEmail(value, atPosition);

    if (value.length >= 3) {
      setDisplay(true);

      if (isAtIn) {
        const emailPart = value.slice(atPosition, value.length);
        const regex = new RegExp(`^${emailPart}`,'i');
        setFilteredEmails(
          options.filter(option => option.search(regex) >= 0),
        );
      }
    } else {
      setDisplay(false);
    }

  };

  const onLoginHandler = () => {
    dispatch(checkLogin(password, email, props.navigation));
  };

  const onBlur = () => {
    setDisplay(false);
  };

  const chooseOption = item => {
    setEmail(item);
    setDisplay(false);
  };

  const ListItem = ({item}) => {
    return (
      <TouchableOpacity
        style={styles.option}
        onPress={() => {
          chooseOption(namePart + item);
        }}>
        <Text style={styles.optText}>{namePart + item}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
        {/* Aspire Logo Container */}
        <View style={styles.logo}>
          <Image source={logo} />
        </View>

        {loading ? (
          <ActivityIndicator
            color={Colors.primary}
            style={styles.activityIndicator}
            size="large"
          />
        ) : null}

        <Text style={styles.error}>{error}</Text>

        {/* Email textInput Container */}
        <SafeAreaView style={styles.emailCont}>
        <TextInput
          keyboardType="email-address"
          style={{
            ...styles.input,
            borderColor: error ? 'red' : Colors.primary,
          }}
          placeholder={strings('login.email')}
          value={email}
          onChangeText={onNameHandler}
          onBlur={onBlur}
        />
        {/* Emails suggestions */}
        {display && (
          <View style={styles.optContainer}>
            {filteredEmails.map(opt => (
              <ListItem item={opt} key={opt} />
            ))}
          </View>
        )}
        </SafeAreaView>
        {/* Password textInput Container */}
        <TextInput
          style={{
            ...styles.input,
        
            borderColor: error ? 'red' : Colors.primary,
            elevation:5
            
          }}
          placeholder={strings('login.password')}
          onChangeText={onPassHandler}
          value={password}
        />
        {/* Login Btn */}
        
        <TouchableOpacity style={styles.btnCont} onPress={onLoginHandler}>
          <Text style={styles.btnText}>{strings('login.login_btn')}</Text>
        </TouchableOpacity>
       
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical:20
    
  },
  emailCont:{paddingVertical:15, width:'100%', alignItems:'center'},
  logo: {
    backgroundColor: 'white',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 5,
      height: 20,
    },
    shadowOpacity: 13,
    shadowRadius: 4.5,
    elevation: 20,
  },
  input: {
    fontSize: 20,
    textAlign: 'center',
    borderWidth: 2,
    borderRadius: 45,
    width: '80%',    
    backgroundColor:'white'
  },
  btnCont: {
    borderColor: Colors.primary,
    borderRadius: 50,
    marginVertical: 10,
    backgroundColor: Colors.primary,
    alignItems: 'center',
    paddingVertical: 10,  
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    fontWeight: '700',
    textTransform: 'capitalize',
  },
  error: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: '700',
    marginVertical: 8,
    textTransform: 'capitalize',
  },
  activityIndicator: {
    marginLeft: 8,
  },
  optContainer: {
    elevation: 20,
    width: '80%',
    borderWidth: 2,
    borderColor:Colors.primary,
    //position:'absolute',
    //top:'100%'

  },
  option: {
    borderBottomWidth: 1,
    borderBottomColor:'#ccc',
    backgroundColor: '#fff',
    padding: 5,
  },
  optText: {
    color: 'black',
    fontSize: 15,
  },
});
