import React from "react";
import { StyleSheet, View, Image, Text, useColorScheme } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import colors from "../../../config/colors";

function TestInformation(props) {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={[colors.linearGradient.light, colors.linearGradient.dark]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.linearGradient}
      ></LinearGradient>
      <View style={styles.row}>
        <Image
          source={require("../../../assets/img/woman-test.png")}
          style={styles.img}
        />
        <View>
          <Text style={styles.title}>Do your own test!</Text>
          <Text style={styles.subtitle}>
            Follow the instructions to do your own test.
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 104,
    borderRadius: 16,
    alignSelf: "center",
    marginTop: 50,
  },
  img: {
    marginRight: 15,
    bottom: 21,
    width: 120,
    height: 125,
    position: "relative",
  },
  linearGradient: {
    width: 350,
    height: 104,
    borderRadius: 16,
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-start",
    position: "absolute",
    marginHorizontal: 15,
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
    fontWeight: "bold",
    marginVertical: 10,
  },
});

export default TestInformation;
