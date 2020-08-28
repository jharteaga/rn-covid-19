import React from 'react';
import { StyleSheet, View, Image, Text, useColorScheme } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import colors from '../../../config/colors';

function TestInformation(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.linearGradient.light, colors.linearGradient.dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      >
        <View style={styles.row}>
          <Image
            source={require('../../../assets/img/woman-test.png')}
            style={styles.img}
          />
          <View>
            <Text style={styles.title}>Do your own test!</Text>
            <Text style={styles.subtitle}>
              Follow the instructions to do your own test.
            </Text>
          </View>
        </View>
      </LinearGradient>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 327,
    height: 104,
    borderRadius: 16,
    alignSelf: 'center',
    marginTop: 40,
  },
  img: {
    marginRight: 10,
    position: 'relative',
    bottom: 12,
    width: 111,
    height: 116,
  },
  linearGradient: {
    position: 'absolute',
    width: 327,
    height: 104,
    borderRadius: 16,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 14,
    opacity: 0.8,
    width: 180,
  },
  title: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});

export default TestInformation;
