import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { Text, View} from '../components/Themed';
import VaxModel from '../models/VaxModel';
import Moment from 'moment';
import VaxDetailButton from './VaxDetailButton';

type Props = {
  model: VaxModel;
};

export default class VaxCard extends React.Component<Props> {
    
    constructor(props: Props) {
      super(props);
    }
    onPressDetail(props: Props){
      console.log(`Abrir tela detalhe vacina id ${props.model.vaxId}`)
    }

    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.containerImage}>
                  <Image
                    style={styles.vaxImage}
                    source={{uri: this.props.model.urlImage}}
                  />
                  <Text style= {styles.text}>{this.props.model.name}</Text>
                </View>  
                <View style = {styles.containerDetail}>
                  <Text style= {styles.text}>Data vacinação:</Text>
                  <Text style= {styles.text}>{Moment(this.props.model.vaxDate).format("DD/MM/YYYY") }</Text>
                  <VaxDetailButton title= {"DETALHE"} onPress={() => this.onPressDetail(this.props)}/>
              </View>
            </View>
        ) 
    }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    background: '#fff',
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
  containerButton:{
    borderRadius: 4,
    borderStyle: 'solid',
    borderColor: '#fff',
    borderWidth: 1,
    marginTop: 12,
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
    textAlign: 'center'
  },
});