import React from "react";
import { Linking, Platform } from "react-native";

import colors from "../../../config/colors";
import RoundedButton from "../../../components/RoundedButton";

function SmsButton(props) {
  const openSms = () => {
    const msg = "This is a test message";
    const number = "+17785125893";
    Linking.openURL(
      `sms:${number}${Platform.OS === "ios" ? "&" : "?"}body=${msg}`
    );
  };

  return (
    <RoundedButton
      color={colors.blue}
      icon="message"
      title="Send SMS"
      onPress={openSms}
    />
  );
}

export default SmsButton;
