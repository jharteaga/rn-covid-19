import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

function HomeScreen(props) {
  return (
    <View style={styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { backgroundColor: '#FFFFFF', flex: 1 },
});

export default HomeScreen;
