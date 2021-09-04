import * as React from 'react';
import { StyleSheet, Button } from 'react-native';
import { View} from '../components/Themed';

interface Props{
    onPress:Function,
    title:string
}

export default class VaxDetailButton extends React.Component<Props>{

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
            <View style= {styles.containerButton}>
                      <Button
                        onPress={() => this.props.onPress()}
                        title= {this.props.title}
                        color="rgb(0 0 0 / 0%)"
                        accessibilityLabel="Consulte mais detalhes sobre essa vacina"
                      />                
                    </View>
        )
    }
}

const styles = StyleSheet.create({
    containerButton:{
      borderRadius: 4,
      borderStyle: 'solid',
      borderColor: '#fff',
      borderWidth: 1,
      marginTop: 12,
    }
  });