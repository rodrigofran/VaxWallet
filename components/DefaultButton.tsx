import * as React from 'react';
import { TouchableOpacity } from 'react-native';
import { StyleSheet } from 'react-native';
import { Text} from '../components/Themed';
import Colors from '../constants/Colors';

interface Props{
    onPress:Function,
    title:string,
    fontSize?: number,
}

export default class DefaultButton extends React.Component<Props>{

    constructor(props:Props){
        super(props);
    }

    render(){
        return(
          <TouchableOpacity onPress= {() => this.props.onPress()} style={styles.appButtonContainer}>
            <Text style={[styles.appButtonText, {fontSize: this.props.fontSize ?? 12 } ] }>{this.props.title}</Text>
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
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
  appButtonText: {
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase"
  }
});