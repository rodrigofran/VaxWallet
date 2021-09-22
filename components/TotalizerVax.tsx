import * as React from 'react';
import { StyleSheet } from 'react-native';
import Colors from '../constants/Colors';
import { Text, View} from './Themed';

type Props = {
  description: string;
  totalizer: number;
};

export default function TotalizerVax (props: Props) {
  return(
      <View style= {styles.container}>
        <View style= {styles.containerText}>
          <Text style={styles.text}>{props.description}</Text>
        </View>
        <View style={styles.containerTotalizer}>
          <Text style={[styles.textTotalizer]}>{props.totalizer}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: Colors.dark.background,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderRadius: 15,
  },
  containerText: {
    marginTop: 12,
    padding: 12,
    backgroundColor: Colors.dark.background,
  },
  containerTotalizer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 6,
    marginBottom: 20,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: '#fff'
  },
  textTotalizer: {
    fontSize: 40,
  },
  text: {
    fontSize: 20,
    color: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});