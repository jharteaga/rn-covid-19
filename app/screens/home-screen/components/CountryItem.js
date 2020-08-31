import React from 'react';
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native';

function PickerItem({ item, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Image
          source={{
            uri: `https://www.countryflags.io/${item.code}/flat/48.png`,
          }}
          style={styles.flag}
        />
        <Text style={styles.countryName}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingVertical: 5,
    borderBottomWidth: 2,
    borderColor: 'lightgray',
  },
  countryName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  flag: {
    width: 50,
    height: 50,
    marginHorizontal: 20,
  },
});

export default PickerItem;
