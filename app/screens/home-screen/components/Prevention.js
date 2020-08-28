import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

import colors from '../../../config/colors';

function Prevention(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Prevention</Text>
      <View style={styles.imagesContainer}>
        <View>
          <Image
            source={require('../../../assets/img/avoid-close-contact.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Avoid close contact</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/img/clean-your-hands.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Clean your hands often</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/img/wear-a-mask.png')}
            style={styles.image}
          />
          <Text style={styles.text}>Wear a facemask</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginTop: 30 },
  image: {
    alignSelf: 'center',
  },
  imagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 24,
    marginTop: 20,
  },
  text: {
    marginTop: 5,
    textAlign: 'center',
    width: 90,
  },
  title: {
    color: colors.black,
    fontSize: 20,
    fontWeight: '600',
    marginLeft: 24,
  },
});

export default Prevention;
