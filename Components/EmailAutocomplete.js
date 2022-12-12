import React from 'react';
import { StyleSheet, Text, View } from 'react-native'
import Autocomplete from 'react-native-autocomplete-input';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';
import { strings } from '../Languages/i18ln';

const EmailAutocomplete = ({selectEmail, test, filteredEmails, query}) => {

  const renderItemList = ({item})=> ( 
    <TouchableOpacity onPress={() => {selectEmail(item)}} style={styles.SearchBoxItem}>
      <Text style={styles.SearchBoxTextItem}>{item}</Text>
    </TouchableOpacity>
  )
    return (        
            <Autocomplete
              placeholder={strings('reservationCard.emailAutocomplete')}
              data={filteredEmails}
              inputContainerStyle={styles.AutocompleteStyle}
              value={query}
              onChangeText={text => {
                  test(text);
              }}
              flatListProps={{
                  keyExtractor: item => item,
                  renderItem: renderItemList,
              }}
            />
    )
}

export default EmailAutocomplete

const styles = StyleSheet.create({
    AutocompleteStyle: {
        borderWidth: 2,
        borderColor: Colors.primary,
        borderRadius: 45,
        overflow: 'hidden',
      },
      SearchBoxItem: {
        width: '100%', 
      },
      SearchBoxTextItem: {
        margin: 5,
        fontSize: 18,
        paddingTop: 4,
        color: Colors.primary,
        elevation:100,  

      },
})
