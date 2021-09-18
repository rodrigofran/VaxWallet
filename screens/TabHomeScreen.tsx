import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View } from '../components/Themed';

export default function TabHomeScreen() {
  
  // const quantidadeVacina = {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, Seja bem vindo! </Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff'
    

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey'
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
