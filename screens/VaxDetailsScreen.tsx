import { RouteProp, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { View, SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import VaxCardDetails from '../components/VaxCardDetails';
import { RootStackParamList } from '../types';

export default function VaxDetailsScreen()
{
  const route = useRoute<RouteProp<RootStackParamList, 'VaxDetails'>>();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={{ flexGrow: 1, justifyContent: 'center' }}>
        <View style = {styles.containerVaxDetails}>
            <VaxCardDetails model = {route.params}></VaxCardDetails>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1, 
    backgroundColor: '#fff',
  },
  containerVaxDetails: {
    margin: 12,
  }
});