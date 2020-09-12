import React from "react";
import { View, Text, StyleSheet } from "react-native";
import colors from "../../../config/colors";

const Square = ({ title, subtitle, containerStyle, textStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.column}>
        <Text style={styles.title}>{title}</Text>
        <Text style={[styles.subtitle, textStyle]}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderRadius: 8,
    marginHorizontal: 7,
    marginVertical: 2,
  },
  column: {
    flex: 1,
    justifyContent: "space-between",
  },
  title: {
    fontSize: 14,
    fontWeight: "bold",
    color: colors.secondary,
    marginTop: 10,
    marginLeft: 10,
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "800",
    color: colors.secondary,
    marginBottom: 10,
    marginLeft: 10,
  },
});

export default Square;
