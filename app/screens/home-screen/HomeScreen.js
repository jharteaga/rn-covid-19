import React from 'react';
import { StyleSheet, View } from 'react-native';

import colors from '../../config/colors';
import Header from './components/Header';
import Prevention from './components/Prevention';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
      <Prevention />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: colors.secondary, flex: 1 },
});

export default HomeScreen;
