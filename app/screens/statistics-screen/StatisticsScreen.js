import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../config/colors';

function StatisticsScreen(props) {
  return (
    <View style={styles.container}>
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'flex-end',
  },
  bottom: {
    backgroundColor: colors.secondary,
    width: '100%',
    height: 260,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
  },
});

export default StatisticsScreen;
