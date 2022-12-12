import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CalendarStrip from 'react-native-calendar-strip';
import Colors from '../constants/Colors';

const ReservationCalendar = ({selectDate, selectedDate}) => {
  
  const datesBlacklistFunc = date => {
    return date.isoWeekday() === 5; //friday
  };

  return (
    <CalendarStrip
      style={styles.calenderStyle}
      daySelectionAnimation={{
        type: 'border',
        duration: 100,
      }}
      dateNumberStyle={styles.dateNumberStyle}
      dateNameStyle={styles.dateNameStyle}
      highlightDateNumberStyle={styles.highlightDateNumberStyle}
      highlightDateNameStyle={styles.hlDateNumStyle}
      disabledDateNameStyle={styles.disabledDate}
      disabledDateNumberStyle={styles.disabledNumber}
      datesBlacklist={datesBlacklistFunc}
      onDateSelected={selectDate}
      selectedDate={selectedDate}
      showMonth={false}
    />
  );
};

export default ReservationCalendar;

const styles = StyleSheet.create({
  calendarContainer: {
    height: '10%',
    marginVertical: 20,
  },
  calenderStyle: {height: '100%'},
  highlightDateNumberStyle: {
    //style number we choose
    color: '#2E66E7',
    marginTop: 0,
    height: 35,
    width: 35,
    textAlign: 'center',
    fontWeight: 'bold',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#2E66E7',
    fontSize: 25,
  },
  disabledNumber: {color: 'grey', paddingTop: 10},
  dateNumberStyle: {color: Colors.primary, paddingTop: 10},
  dateNameStyle: {color: Colors.primary},
  hlDateNumStyle: {color: '#2E66E7'},
  disabledDate: {color: 'grey'},
});
