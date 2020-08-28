import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View } from 'react-native';

function Icon({ name, color, size, style = {} }) {
  return (
    <View style={style}>
      <MaterialCommunityIcons name={name} size={size} color={color} />
    </View>
  );
}

export default Icon;
