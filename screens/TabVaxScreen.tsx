import * as React from 'react';
import { StyleSheet, FlatList } from 'react-native';

import { View } from '../components/Themed';
import VaxCard from '../components/VaxCard';
import VaxModel from '../models/VaxModel';

import axios from 'axios';

export interface Props {
  name: string;
  enthusiasmLevel?: number;
}

interface State {
  list: Array<VaxModel>;
  search: string;
}

export default class TabVaxScreen extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {list: new Array<VaxModel>(), search: ""}
    this.getVaxList();
  }

  async getVaxList(){
    var list = new Array<VaxModel>();
    await axios.get<Array<VaxModel>>('https://602ea2aa4410730017c5111c.mockapi.io/v1/api/vacine/find')
    .then(function (response) {
      // handle success
      list = response.data;
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    });
    this.state = {list, search: this.state.search};
    this.setState({list: this.state.list, search: this.state.search});
  }

  render(){
      return (
        <View style={styles.container}>
          <FlatList
            style = {styles.list}
            data={this.state.list}
            renderItem={({item}) => <VaxCard vaxId = {item.vaxId} name = {item.name} urlImage = {item.urlImage} vaxDate = {item.vaxDate} />}
          />
        </View>
    );
  }
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
