import React from "react";
import { View, StyleSheet } from "react-native";

import Square from "./Square";
import colors from "../../../config/colors";

const Squares = () => {
  return (
    <View>
      <View style={styles.row}>
        <Square
          title="Affected"
          subtitle="336,851"
          containerStyle={{
            backgroundColor: colors.orange,
            width: 180,
          }}
          textStyle={{ fontSize: 24 }}
        />
        <Square
          title="Death"
          subtitle="9,620"
          containerStyle={{ backgroundColor: colors.red, width: 180 }}
          textStyle={{ fontSize: 24 }}
        />
      </View>
      <View style={styles.row}>
        <Square
          title="Recovered"
          subtitle="17,967"
          containerStyle={{ backgroundColor: colors.green, width: 115 }}
        />
        <Square
          title="Active"
          subtitle="301,154"
          containerStyle={{ backgroundColor: colors.aqua, width: 115 }}
        />
        <Square
          title="Serious"
          subtitle="8,702"
          containerStyle={{ backgroundColor: colors.purple, width: 115 }}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  row: {
    marginTop: 10,
    flexDirection: "row",
    justifyContent: "center",
  },
});

export default Squares;
