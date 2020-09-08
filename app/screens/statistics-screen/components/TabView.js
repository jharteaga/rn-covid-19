import React from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import colors from "../../../config/colors";

const TabView = ({ style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.background} />
      <View style={styles.overlay} />
      <View style={styles.row}>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.selected}>My Country</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.option}>
          <Text style={styles.text}>Global</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    height: 50,
    position: "relative",
    borderRadius: 100,
    backgroundColor: colors.secondary,
    opacity: 0.2,
  },
  container: {
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
  },
  option: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
  overlay: {
    position: "absolute",
    width: "50%",
    height: 39,
    top: 5,
    left: 6,
    backgroundColor: colors.secondary,
    borderRadius: 100,
  },
  row: {
    flexDirection: "row",
    position: "relative",
    top: -35,
  },
  selected: {
    fontWeight: "600",
    fontSize: 14,
  },
  text: {
    fontWeight: "500",
    fontSize: 14,
    color: colors.secondary,
  },
});

export default TabView;
