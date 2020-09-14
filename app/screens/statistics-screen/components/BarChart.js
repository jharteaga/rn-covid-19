import React from "react";
import { StyleSheet, View } from "react-native";
import {
  VictoryBar,
  VictoryChart,
  VictoryTheme,
  VictoryAxis,
} from "victory-native";
import colors from "../../../config/colors";

const data = [
  { date: "Apr 1", cases: 5000 },
  { date: "Apr 2", cases: 8000 },
  { date: "Apr 3", cases: 7200 },
  { date: "Apr 4", cases: 13800 },
  { date: "Apr 5", cases: 10000 },
  { date: "Apr 6", cases: 15000 },
  { date: "Apr 7", cases: 17000 },
];

const BarChart = () => {
  return (
    <VictoryChart
      width={355}
      height={240}
      theme={VictoryTheme.material}
      domainPadding={{ x: 5 }}
      maxDomain={{ y: 20000 }}
    >
      <VictoryAxis
        style={{
          tickLabels: { fill: "#999FBF" },
        }}
      />
      <VictoryAxis dependentAxis style={{ tickLabels: { fill: "#999FBF" } }} />
      <VictoryBar
        data={data}
        x="date"
        y="cases"
        cornerRadius={{ top: 4 }}
        alignment="start"
        animate
        style={{ data: { fill: colors.red } }}
        barWidth={10}
      />
    </VictoryChart>
  );
};

export default BarChart;
