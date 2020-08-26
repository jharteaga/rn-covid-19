import React from 'react';

import colors from '../../../config/colors';
import RoundedButton from '../../../components/RoundedButton';

function SmsButton(props) {
  return <RoundedButton color={colors.blue} icon="message" title="Send SMS" />;
}

export default SmsButton;
