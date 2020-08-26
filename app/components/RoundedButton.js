import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import Icon from './Icon';

function RoundedButton({ color, icon, title }) {
  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Icon color="#FFFFFF" name={icon} size={25} />
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 80,
    height: 48,
    width: 155,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 15,
    marginLeft: 10,
  },
});

export default RoundedButton;
