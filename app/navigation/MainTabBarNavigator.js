import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import HomeScreen from '../screens/home-screen/HomeScreen';
import Icon from '../components/Icon';
import StatisticsScreen from '../screens/statistics-screen/StatisticsScreen';
import colors from '../config/colors';

const Tab = createBottomTabNavigator();

function MainTabBarNavigator(props) {
  return (
    <NavigationContainer>
      <Tab.Navigator
        tabBarOptions={{
          activeTintColor: 'white',
          inactiveTintColor: 'gray',
          showLabel: false,
          showIcon: true,
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name="home"
                color={color}
                size={size}
                style={focused && styles.tab}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Statistics"
          component={StatisticsScreen}
          options={{
            tabBarIcon: ({ color, size, focused }) => (
              <Icon
                name="chart-bar"
                color={color}
                size={size}
                style={focused && styles.tab}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  tab: {
    backgroundColor: colors.blue,
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 30,
  },
});

export default MainTabBarNavigator;
