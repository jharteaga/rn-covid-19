import React from "react";
import { Linking, Platform } from "react-native";

import colors from "../../../config/colors";
import RoundedButton from "../../../components/RoundedButton";

function CallButton(props) {
  const openDialPad = async () => {
    let number = "";

    if (Platform.OS === "ios") {
      number = "telprompt:${+17785125893}";
    } else {
      number = "tel:${+17785125893}";
    }

    try {
      await Linking.openURL(number);
    } catch (err) {
      console.log("Error opening Dial Pad", err);
    }
  };

  return (
    <RoundedButton
      color={colors.red}
      icon="phone"
      title="Call Now"
      onPress={openDialPad}
    />
  );
}

export default CallButton;
