import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";
import colors from "../../../config/colors";

const Options = () => {
  return (
    <View style={styles.container}>
      <TouchableHighlight>
        <Text style={styles.text}>Total</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.text}>Today</Text>
      </TouchableHighlight>
      <TouchableHighlight>
        <Text style={styles.text}>Yesterday</Text>
      </TouchableHighlight>
    </View>
  );
};

export default Options;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 8,
  },
  text: {
    fontSize: 15,
    color: colors.secondary,
    fontWeight: "600",
    marginHorizontal: 10,
  },
});
