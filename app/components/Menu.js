import React from 'react';
import { StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native';

import colors from '../config/colors';
import Icon from './Icon';

function Menu(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Icon name="menu" color={colors.secondary} size={25} />
      </TouchableOpacity>
      <TouchableOpacity>
        <Icon name="bell-outline" color={colors.secondary} size={25} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    marginTop: StatusBar.currentHeight + 20,
  },
});

export default Menu;
