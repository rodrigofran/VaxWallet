import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { View, Text} from '../components/Themed';
import Colors from '../constants/Colors';

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
          <TouchableOpacity onPress= {() => this.props.onPress()} style={styles.appButtonContainer}>
            <Text style={styles.appButtonText}>{this.props.title}</Text>
          </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
  appButtonContainer: {
    elevation: 8,
    backgroundColor: Colors.dark.background,
    borderColor: "#fff",
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    fontFamily: 'Roboto',
    fontSize: 14,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
  });
