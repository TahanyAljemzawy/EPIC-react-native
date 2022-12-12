import React, {useEffect} from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import Header from '../Components/Header';

import ListItem from '../Components/ListItem';
import Colors from '../constants/Colors';
import {fetchTeamData} from '../Store/Actions/index';
import { strings } from '../Languages/i18ln';


const TeamViewScreen = props => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(fetchTeamData());
  }, []);

  const {error, loading, teamData} = useSelector(state => ({
    error: state.team.error,
    loading: state.team.loading,
    teamData: state.team.userTeam,
  }));

  const renderListItem = ({item}) => {
    return (
      <ListItem
        keyExtractor={item => item.id}
        image={item.image}
        fullName={strings(item.fullname)}
        location={strings(item.location)}
        email={item.email}
        phonenumber={item.phonenumber}
        isCheckIn={item.checkInState}
      />
    );
  };

  return (
    <SafeAreaProvider>
      <Header title={strings('headersName.myTeam')} back={true} nav={props.navigation} color={Colors.primary} />
        <View style={styles.sectionContainer}>
        {loading ? (
        <View>
          <ActivityIndicator
            color={Colors.primary}
            size="large"
            style={styles.activityIndicator}
          />
        </View>
        ) : (
          <FlatList data={teamData} renderItem={renderListItem} />
           )}
        </View>
    </SafeAreaProvider>
  );
};

export default TeamViewScreen;

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  activityIndicator:{
    marginLeft: 8,
  },
});
