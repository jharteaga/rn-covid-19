import React from 'react';

import colors from '../../../config/colors';
import RoundedButton from '../../../components/RoundedButton';

function CallButton(props) {
  return <RoundedButton color={colors.red} icon="phone" title="Call Now" />;
}

export default CallButton;
