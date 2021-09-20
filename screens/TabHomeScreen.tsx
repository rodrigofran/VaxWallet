import * as React from 'react';
import { useEffect } from 'react';
import { BackHandler, StyleSheet } from 'react-native';
import AlertExitApp from '../components/AlertExitApp';
import { Dimensions, StyleSheet } from 'react-native';
import MapView, {Marker} from 'react-native-maps';

import { Text, View } from '../components/Themed';


export default function TabHomeScreen() {

  useEffect(() => {
    const backAction = () => {
      if(navigation.getState().index === 0){
        return AlertExitApp(undefined);
      }
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Olá, seja bem vindo!</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <Text style={styles.textHome}>Quantidade de vacinas tomadas!
      </Text>
      <View style={styles.qtdVacinaView}>
        <Text style={styles.qtdVacina}>60</Text>
      </View>
      <View style={styles.container}>
        <Text>Última Vacina</Text>
      </View>
      <View style={styles.mapView}>
        <Text style={styles.titleMap}>
          Postos de Vacinação Próximos
        </Text>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: -23.602377551055696, 
            longitude: -46.61159655287465,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
            
          }}>

            <Marker
              coordinate={{
              latitude: -23.60242250856585, 
              longitude: -46.61446260083016, 
              }}
              title= 'Vacinação COVID-19 PagueMenos'
              description='Av. Dr Gentil de Moura, 45 - Ipiranga'
              >
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.611321151942796, 
              longitude: -46.621598166946754,
              }}
              title= 'UBS Jarim da Saúde'
              description='R. Domingos de Rogatis, 187 - Jarim da Saúde'
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.612353611659124, 
              longitude: -46.60380415954848, 
              }}
              title= 'UBS Moinho Velho II'
              description='R. Belgrado, 323 - Vila Moinho Velho'
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.596427663124548, 
              longitude: -46.60952657671806,
              }}
              title= 'Hospital Dom Alvarenga'
              description='Av. Nazaré, 1361 - Ipiranga'
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.603866648014836, 
              longitude: -46.623413953844114,
              }}
              title= 'UBS Prof Jandira Massur'
              description='Rua Dom Lúcio de Sousa, 372 - Vila Gumercindo'
              >              
            </Marker>

           
        </MapView>
      </View>
      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 20,
    backgroundColor: '#fff'
    

  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey'
    
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  qtdVacinaView: {
    width: 120,
    height: 120,
    borderRadius: 500,
    alignItems: 'center',
    justifyContent: 'center',
    shadowRadius: 6,
  },

  qtdVacina: {
    fontSize: 40
  },

  textHome: {
    fontSize: 20,
    color: 'black',
    backgroundColor: '#fff',
    marginBottom: 20
  },

  mapView: {
    alignItems: 'center',
    justifyContent: 'center',
    
  },

  mapStyle: {
    width: Dimensions.get('window').width,
    height: '100%'
  },

 

  titleMap: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    paddingTop: 30
    
  },

});
