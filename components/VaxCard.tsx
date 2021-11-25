import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View} from '../components/Themed';
import VaxModel from '../models/VaxModel';
import Moment from 'moment';
import DefaultButton from './DefaultButton';
import { useNavigation } from '@react-navigation/native';

type Props = {
  model: VaxModel;
};

export default function VaxCard (props: Props) {
    
  const navigation = useNavigation();

  const onPressVaxDetail = () => {
    navigation.navigate('VaxDetails', props.model);
  }

  return(
      <View style = {styles.container}>
          <View style = {styles.containerColumn}>
            <View style = {styles.containerRow}>
              <Text style= {styles.text}>{props.model.nomeVacina}</Text>
            </View>
            <View style = {styles.containerImage}>
              <Image
                style={styles.vaxImage}
                source={{uri: props.model.urlImage}}
              />
            </View>  
          </View>
          <View style = {styles.containerDetail}>
            <Text style= {styles.textLabel}>Data vacinação:</Text>
            <Text style= {styles.textDate}>{Moment(props.model.dataVacinacao).format("DD/MM/YYYY") }</Text>
            <DefaultButton title= {"DETALHE"} onPress={onPressVaxDetail}/>
        </View>
      </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    padding: 24,
    margin: 5,
    marginLeft: 24,
    marginRight: 24,
    shadowRadius: 6,
    borderRadius: 8,
    alignItems: 'center',
  },
  containerRow: {
    flex: 2,
    flexDirection:'row',
  },
  containerColumn: {
    flex: 1,
    flexDirection:'column',
  },
  containerImage:{
    flex: 1,
    alignItems: 'center',
    margin: 10
  },
  vaxImage: {
    width: 36,
    height: 92,
  },
  containerDetail:{
    flex: 2,
    marginLeft: 24,
  },
  text:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 16,
    lineHeight: 25,
    textAlign: 'center',
  },
  textLabel:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 25,
    textAlign: 'center',
  },
  textDate:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
    marginBottom: 24,
  }
});