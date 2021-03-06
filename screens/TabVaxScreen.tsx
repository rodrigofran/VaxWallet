import * as React from 'react';
import { StyleSheet, FlatList, RefreshControl, Alert } from 'react-native';
import { SearchBar } from 'react-native-elements';
import Moment from 'moment';

import { View } from '../components/Themed';
import VaxCard from '../components/VaxCard';
import VaxModel from '../models/VaxModel';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function TabVaxScreen(){
  
  useEffect(() => 
  {
    getVaxList();
  }, [])
  
  const [search, setSearch] = useState<string>("");
  const [list, setList] = useState<Array<VaxModel>>(new Array<VaxModel>());
  const [listFiltered, setListFiltered] = useState<Array<VaxModel>>(new Array<VaxModel>());
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const refreshVaxList = () =>{
    getVaxList();
  }

  const getVaxList = async () => {
    setSearch("");
    setRefreshing(true);

    var list = new Array<VaxModel>();
    await axios.get<Array<VaxModel>>('https://602ea2aa4410730017c5111c.mockapi.io/v1/api/vacine/find')
    .then((response) => {
      list = response.data;
    })
    .catch(() => {
      Alert.alert("Atenção!","Não foi possível carregar as informações!");
    });

    setList(list);
    setListFiltered(list);
    setSearch("");
    setRefreshing(false);
  };

  const updateSearch = (search:string) => {
    setSearch(search);
    if(search.length > 1) {
      let listFiltered = list.filter((model) => 
        model.name.toLowerCase().includes(search.toLowerCase()) ||
        Moment(model.vaxDate).format("DD/MM/YYYY").includes(search.toLowerCase()));
      setListFiltered(listFiltered);
      return listFiltered;
    }
    setListFiltered(list);
  };

  return (
    <View style={styles.container}>
       <SearchBar
        placeholder="Buscar..."
        lightTheme = {true}
        onChangeText={updateSearch}
        value={search}
      />
      <FlatList
        style = {styles.list}
        data={listFiltered}
        refreshControl = {
          <RefreshControl
            refreshing={refreshing}
            onRefresh={refreshVaxList}
            />
        }
        renderItem={({item}) => <VaxCard model = {item} />}
        keyExtractor={(item) => item.id}
      />
    </View>);
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  list: {
    flex: 1,
    backgroundColor: '#fff'
  }
});