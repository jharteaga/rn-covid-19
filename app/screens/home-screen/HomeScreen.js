import React from 'react';
import { StyleSheet, View, Text, Dimensions } from 'react-native';

import Header from './components/Header';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Header />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF', flex: 1 },
});

export default HomeScreen;
