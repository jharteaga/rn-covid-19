import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import colors from '../../../config/colors';
import CallButton from './CallButton';
import Menu from '../../../components/Menu';
import SmsButton from './SmsButton';

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
      <View style={styles.buttonsContainer}>
        <CallButton />
        <SmsButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 20,
  },
  header: {
    backgroundColor: colors.primary,
    width: '100%',
    height: 325,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 20,
  },
  text: {
    color: colors.secondary,
    fontSize: 14,
    marginHorizontal: 24,
    marginTop: 15,
    opacity: 0.8,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: '700',
    marginLeft: 24,
    marginTop: 30,
  },
});

export default Header;
