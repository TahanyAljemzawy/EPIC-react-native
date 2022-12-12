import React from 'react';
import {StyleSheet} from 'react-native';
import Timeline from 'react-native-timeline-flatlist';
import Colors from '../constants/Colors';

const TimeLine = ({data}) => {

  return (
    <Timeline
      style={styles.list}
      data={data}
      circleSize={20}
      circleColor="rgba(0,0,0,0)"
      lineColor={Colors.primary}
      timeContainerStyle={styles.timeContainerStyle}
      timeStyle={styles.timeStyle}
      descriptionStyle={styles.descriptionStyle}
      options={{
        style: {padding: 5},
      }}     
      detailContainerStyle={styles.detailContainerStyle}
      columnFormat='single-column-left'
    />
  );
};

export default TimeLine;

const styles = StyleSheet.create({
  list: {
    flex: .8,
    marginTop: 20,
    width: '100%',
    borderBottomColor:'#ccc',
    borderBottomWidth:2,
  },
  descriptionContainer: {
    flexDirection: 'row',
    paddingRight: 50,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  textDescription: {
    marginLeft: 10,
    color: 'gray',
  },
  timeStyle: {
    textAlign: 'center',
    backgroundColor: '#ff9797',
    color: Colors.primary,
    fontWeight:'bold',
    padding: 8,
    borderRadius: 13,
    fontSize:15,
    backgroundColor:'#BBDAFF',
    borderTopLeftRadius: 60,
    borderBottomRightRadius:60,  
  },
  descriptionStyle: {
    color: Colors.primary,
    padding:5,
  },
  detailContainerStyle:{
    marginBottom: 20,
    paddingLeft: 5,
    paddingRight: 5,
    borderBottomColor:'#BBDAFF',
    borderBottomWidth:2,
    borderLeftColor:'#BBDAFF',
    borderLeftWidth:2,
    fontSize:15,

  },
  timeContainerStyle:{
    minWidth:90,
    marginTop: 5,  
  },
});
