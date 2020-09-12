import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";
import Menu from "../../components/Menu";
import TabView from "./components/TabView";
import Squares from "./components/Squares";

function StatisticsScreen(props) {
  return (
    <View style={styles.container}>
      <Menu />
      <Text style={styles.title}>Statistics</Text>
      <TabView style={styles.tabview} />
      <Squares />
      <View style={styles.bottom}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  bottom: {
    backgroundColor: colors.secondary,
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    height: 260,
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
  tabview: {
    alignSelf: "center",
    marginTop: 20,
  },
  title: {
    color: colors.secondary,
    fontWeight: "700",
    fontSize: 20,
    marginTop: 30,
    marginLeft: 23,
  },
});

export default StatisticsScreen;
