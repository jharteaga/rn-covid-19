import React from 'react';
import { Dimensions, StyleSheet, View, Text } from 'react-native';

import Menu from '../../../components/Menu';

function Header(props) {
  return (
    <View style={styles.header}>
      <Menu />
      <Text style={styles.title}>Covid-19</Text>
      <Text style={styles.subtitle}>Are you feeling sick?</Text>
      <Text style={styles.text}>
        If you feel sick with any of covid-19 symptoms, please call or SMS us
        immediately for help.
      </Text>
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
  subtitle: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 30,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 14,
    marginLeft: 24,
    marginTop: 15,
    opacity: 0.8,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 30,
  },
});

export default Header;
