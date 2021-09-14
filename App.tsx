import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Provider as PaperProvider, TextInput } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import LoginScreen from './screens/LoginScreen';
import { theme } from './App.style';
import { createStackNavigator } from '@react-navigation/stack';
import { startClock } from 'react-native-reanimated';





export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <PaperProvider theme={theme}>
        <Navigation colorScheme={colorScheme}  />
        <StatusBar />
      </PaperProvider>
    );
  }
}
