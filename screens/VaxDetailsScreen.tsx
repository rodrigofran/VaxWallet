import { RouteProp, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { RootStackParamList } from '../types';

export default function VaxDetailsScreen() {
  const route = useRoute<RouteProp<RootStackParamList, 'VaxDetails'>>();
  return (
    <SafeAreaView style={styles.background}>
      <View style={styles.container}>
        <Text> Tela detalhe! Id da vacina {route.params.name}</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },
});