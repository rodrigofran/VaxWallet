import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View} from '../components/Themed';
import VaxModel from '../models/VaxModel';
import Moment from 'moment';
import VaxDetailButton from './VaxDetailButton';
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
          <View style = {styles.containerImage}>
            <Image
              style={styles.vaxImage}
              source={{uri: props.model.urlImage}}
            />
            <Text style= {styles.text}>{props.model.name}</Text>
          </View>  
          <View style = {styles.containerDetail}>
            <Text style= {styles.text}>Data vacinação:</Text>
            <Text style= {styles.textDate}>{Moment(props.model.vaxDate).format("DD/MM/YYYY") }</Text>
            <VaxDetailButton title= {"DETALHE"} onPress={onPressVaxDetail}/>
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
  containerImage:{
    flex: 1,
    alignItems: 'center'
  },
  vaxImage: {
    width: 36,
    height: 92,
  },
  containerDetail:{
    flex: 3,
    marginLeft: 24,
  },
  text:{
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: 16,
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