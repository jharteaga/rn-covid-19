import React from 'react';
import { StatusBar } from 'expo-status-bar';

import MainTabBarNavigator from './app/navigation/MainTabBarNavigator';

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <MainTabBarNavigator />
    </>
  );
}
