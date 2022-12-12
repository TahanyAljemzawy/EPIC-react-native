import React, { useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, I18nManager } from 'react-native'
import Header from '../Components/Header'
import {FlatList} from 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {useDispatch, useSelector} from 'react-redux';
import {fetchRoomsData ,selectRoom} from '../Store/Actions/index';
import RoomItem from '../Components/RoomItem'
import Colors from '../constants/Colors'
import { strings } from '../Languages/i18ln';


const RoomsViewScreen = ({navigation}) => {
  const dispatch = useDispatch();


    useEffect(() => {
        dispatch(fetchRoomsData ());
      }, [dispatch]);
    
      const {error, loading, meetingRooms} = useSelector(state => ({
        error: state.rooms.error,
        loading: state.rooms.loading,
        meetingRooms: state.rooms.roomsInfo,
      }));          

      const renderListItem = ({item}) => {
          return (
          <RoomItem 
          name={item.name}
          floorNum={item.floor}
          capacity={item.capacity}
          equipments={item.equipments}
          itemId={item.id}
          navigation={navigation}
          isRTL ={I18nManager.isRTL}
          />
        )  
      };
   
    return (
         <SafeAreaProvider>
            <Header title={strings('headersName.meetingRoom')} back={true} nav={navigation} />
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
             <FlatList data={meetingRooms}
              renderItem={renderListItem}
              keyExtractor={item => item.id} />
              )}
           </View>
       </SafeAreaProvider>
    )
}

export default RoomsViewScreen

const styles = StyleSheet.create({
    sectionContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white',
      },
      activityIndicator:{
        marginLeft: 8,
      },
})
