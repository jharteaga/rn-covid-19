import React from "react";
import { StyleSheet, View, Text } from "react-native";

import colors from "../../../config/colors";
import CallButton from "./CallButton";
import Menu from "../../../components/Menu";
import SmsButton from "./SmsButton";
import CountryPicker from "./CountryPicker";

function Header(props) {
  return (
    <View style={styles.header}>
      <Menu />
      <View style={styles.row}>
        <Text style={styles.title}>Covid-19</Text>
        <CountryPicker style={styles.picker} />
      </View>
      <Text style={styles.subtitle}>Are you feeling sick?</Text>
      <Text style={styles.text}>
        If you feel sick with any of covid-19 symptoms, please call or SMS us
        immediately for help.
      </Text>
      <View style={styles.buttonsContainer}>
        <CallButton />
        <SmsButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 23,
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    height: 375,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
  },
  picker: {
    marginRight: 35,
  },
  subtitle: {
    color: colors.secondary,
    fontSize: 20,
    fontWeight: "700",
    marginLeft: 24,
    marginTop: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginTop: 20,
  },
  text: {
    color: colors.secondary,
    fontSize: 14,
    marginHorizontal: 24,
    marginTop: 15,
    opacity: 0.8,
    lineHeight: 22,
  },
  title: {
    color: colors.secondary,
    fontSize: 24,
    fontWeight: "700",
    marginLeft: 24,
    marginTop: 20,
  },
});

export default Header;
