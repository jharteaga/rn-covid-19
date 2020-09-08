import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

import colors from "../config/colors";
import Icon from "./Icon";

function RoundedButton({ color, icon, title }) {
  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: color }]}>
      <Icon color={colors.secondary} name={icon} size={21} />
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 80,
    height: 48,
    width: 155,
  },
  text: {
    color: colors.secondary,
    fontSize: 15,
    marginLeft: 10,
    fontWeight: "bold",
  },
});

export default RoundedButton;
