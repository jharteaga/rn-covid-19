import React, { useState } from "react";
import {
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Text,
  Modal,
  Button,
  FlatList,
  Image,
  Platform,
  StatusBar,
} from "react-native";

import colors from "../../../config/colors";
import Icon from "../../../components/Icon";
import CountryItem from "./CountryItem";

const countries = [
  {
    id: 1,
    name: "SAL",
    flag: "https://restcountries.eu/data/slv.svg",
    code: "sv",
  },
  {
    id: 2,
    name: "ARG",
    flag: "https://restcountries.eu/data/arg.svg",
    code: "ar",
  },
  {
    id: 3,
    name: "CAN",
    flag: "https://restcountries.eu/data/can.svg",
    code: "ca",
  },
];

function CountryPicker({ style = {} }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={[styles.container, style]}>
          <Image
            source={{
              uri: `https://www.countryflags.io/SV/flat/48.png`,
            }}
            style={styles.flag}
            resizeMode="contain"
          />

          <Text style={styles.text}>SAL</Text>
          <Icon
            name="chevron-down"
            size={25}
            color={colors.black}
            style={styles.flag}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <StatusBar barStyle="dark" />
        <View style={styles.modalContainer}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={countries}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <CountryItem item={item} onPress={() => setModalVisible(false)} />
            )}
          />
        </View>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.secondary,
    justifyContent: "space-between",
    width: 116,
    height: 40,
    borderRadius: 60,
    paddingHorizontal: 10,
  },
  flag: {
    width: 25,
    height: 25,
    borderRadius: 15,
  },
  modalContainer: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 40 : 0,
  },
  text: {
    fontSize: 13,
    fontWeight: "bold",
    marginLeft: 5,
  },
});

export default CountryPicker;
