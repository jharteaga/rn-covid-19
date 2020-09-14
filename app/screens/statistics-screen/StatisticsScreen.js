import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../config/colors";
import Menu from "../../components/Menu";
import TabView from "./components/TabView";
import Squares from "./components/Squares";
import Options from "./components/Options";
import BarChart from "./components/BarChart";

function StatisticsScreen(props) {
  return (
    <View style={styles.container}>
      <Menu />
      <Text style={styles.title}>Statistics</Text>
      <TabView style={styles.tabview} />
      <Options />
      <Squares />
      <View style={styles.bottom}>
        <Text style={styles.chartTitle}>Daily New Cases</Text>
        <View style={styles.chart}>
          <BarChart />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  chart: {
    marginTop: 10,
    alignSelf: "center",
    marginLeft: 20,
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
  chartTitle: {
    top: 30,
    left: 20,
    fontWeight: "600",
    fontSize: 19,
    letterSpacing: 0.8,
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
