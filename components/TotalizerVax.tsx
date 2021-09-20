import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Text, View} from './Themed';

type Props = {
  description: string;
  totalizer: number;
};

export default function TotalizerVax (props: Props) {
  return(
      <View style= {styles.container}>
        <Text style={styles.text}>{props.description}</Text>
        <View style={styles.containerTotalizer}>
          <Text style={styles.qtdVacina}>{props.totalizer}</Text>
        </View>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  containerText: {
  },
  containerTotalizer: {
    width: 120,
    height: 120,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 6,
    marginBottom: 20,
    borderRadius: 500,
  },
  qtdVacina: {
    fontSize: 40
  },
  text: {
    fontSize: 20,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 20,
    textAlign: 'center',
  },
});