import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { Provider as PaperProvider } from 'react-native-paper';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { theme } from './App.style';

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