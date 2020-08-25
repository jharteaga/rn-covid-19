import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

function StatisticsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#473F97',
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottom: {
    backgroundColor: '#FFFFFF',
    width: Dimensions.get('screen').width,
    height: 285,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default StatisticsScreen;
