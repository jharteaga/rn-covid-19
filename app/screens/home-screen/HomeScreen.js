import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../config/colors';
import Header from './components/Header';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.secondary, flex: 1 },
});

export default HomeScreen;
