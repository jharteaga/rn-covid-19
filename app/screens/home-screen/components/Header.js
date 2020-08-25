import React from 'react';
import { Dimensions, StyleSheet, View } from 'react-native';
import Menu from '../../../components/Menu';

function Header(props) {
  return (
    <View style={styles.header}>
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: '#473F97',
    width: Dimensions.get('screen').width,
    height: 358,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
});

export default Header;
