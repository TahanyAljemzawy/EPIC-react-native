import React, { useState } from 'react'
import { StyleSheet} from 'react-native'
import DateTimePickerModal from 'react-native-modal-datetime-picker';

const DataTimePicker = ({type}) => {
 
 //to handel the date btn and set the time and date
 const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const handleDateConfirm = date => {
    hideDatePicker();
  };
    return (
        <DateTimePickerModal
              isVisible={isDatePickerVisible}
              minimumDate={new Date()}
              mode={type}
              onConfirm={handleDateConfirm}
              onCancel={hideDatePicker}
            />
    )
}

export default DataTimePicker

const styles = StyleSheet.create({})
