import { RouteProp, useRoute } from '@react-navigation/native';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { View, SafeAreaView, StyleSheet, Image, Text, RefreshControl } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import VaxCardDetails from '../components/VaxCardDetails';
import VaxDetailsModel from '../models/VaxDetailsModel';
import { RootStackParamList } from '../types';

export default function VaxDetailsScreen()
{
  const route = useRoute<RouteProp<RootStackParamList, 'VaxDetails'>>();

  useEffect(() => 
  {
    getVaxDetails();
  }, []);

  const [vaxDetails, setVaxDetails] = useState<VaxDetailsModel>({} as VaxDetailsModel);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const getVaxDetails = async () => {
    console.log(route.params.vaxId);
    setRefreshing(true);

    await axios.get<VaxDetailsModel>('https://602ea2aa4410730017c5111c.mockapi.io/v1/api/vacine/vaxDetails/'+ route.params.vaxId)
    .then((response) => {
      console.log(response.data)
      setVaxDetails(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
    setRefreshing(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        style={styles.scrollView}
        refreshControl = 
        {
          <RefreshControl
            refreshing={refreshing}
            onRefresh={getVaxDetails}
            />
        }>
        <View style = {[styles.containerDetails, !refreshing && {display: 'flex'}]}>
          <VaxCardDetails model = {vaxDetails}></VaxCardDetails>
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
  },
  containerDetails: {
    flex: 1,
    display: 'none',
  }
});