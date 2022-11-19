import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
const SearchBar = ({term, setTerm}) => {
  return (
    <View style={Styles.mainContainer}>
      <TextInput
        style={Styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={newTerm => setTerm(newTerm)}
      />
    </View>
  );
};
const Styles = StyleSheet.create({
  mainContainer: {
    backgroundColor: '#F0EEEE',
    marginTop: 15,
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: 'row',
  },
  inputStyle: {
    flex: 1,
    fontSize: 18,
  },
  iconStyle: {
    fontSize: 35,
    alignSelf: 'center',
    marginHorizontal: 15,
  },
});
export default SearchBar;
