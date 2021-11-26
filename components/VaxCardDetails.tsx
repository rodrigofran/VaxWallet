import * as React from 'react';
import { StyleSheet, Image, Linking, Alert } from 'react-native';
import { Text, View} from './Themed';
import Moment from 'moment';
import DefaultButton from './DefaultButton';
import VaxModel from '../models/VaxModel';

interface Props
{
  model: VaxModel
}

export default function VaxCardDetails(props:Props)
{
  const onPressAnvisa = () =>
  {
    Linking.canOpenURL(props.model.urlAnvisa).then(supported => {
      if (supported) {
        Linking.openURL(props.model.urlAnvisa);
      } else {
        Alert.alert("Atenção!","Não foi possível abrir a Url: " + props.model.urlAnvisa);
      }});
  }

  return(
      <View style = {styles.container}>
        <View style = {styles.containerRow}>
          <View style = {styles.containerInfo}>
              <Image
                style={styles.vaxImage}
                source={{uri: props.model.urlImage}}
              />
              <Text style= {styles.text}>{props.model.nomeVacina}</Text>
            </View>
            <View style = {styles.containerInfoVertical}>
              <View style = {[styles.containerInfo, {justifyContent: 'flex-end'}]}>
                <Text style= {styles.text}>Cod. Anvisa</Text>
                <Text style= {styles.text}>{ props.model.codigoAnvisa }</Text>
              </View>
              <View style = {[styles.containerInfo, {justifyContent: 'flex-end'}]}>
                <Text style= {styles.text}>Números de doses</Text>
                <Text style= {styles.text}>{ props.model.numeroDose }</Text>
              </View>
            </View>
        </View>
        <View style = {styles.containerRow}>
          <View style = {styles.containerInfo}>
            <Text style= {styles.text}>Data vacinação</Text>
            <Text style= {styles.text}>{Moment(props.model.dataVacinacao).format("DD/MM/YYYY") }</Text>
          </View>
          <View style = {styles.containerInfo}>
            <Text style= {styles.text}>Data Dose Reforço</Text>
            <Text style= {styles.text}>{props.model.dataReforco >= props.model.dataVacinacao ? 'N/A' : Moment(props.model.dataReforco).format("DD/MM/YYYY") }</Text>
          </View>
        </View>
        <View style = {styles.containerRow}>
          <View style = {styles.containerInfo}>
            <DefaultButton title= {"MAIS INFORMAÇÕES"} onPress={onPressAnvisa}/>
          </View>
        </View>
      </View>
  ) 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 12,
    paddingTop: 22,
    paddingBottom: 12,
    borderRadius: 8,
    shadowRadius: 6,
  },
  containerInfo:{
    flex: 1,
    alignItems: 'center'
  },
  containerInfoVertical: {
    flex: 1,
    flexDirection: 'column'
  },
  containerRow: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 38,
  },
  vaxImage: {
    width: 36,
    height: 92,
  },
  text:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
    textAlign: 'center',
  }
});