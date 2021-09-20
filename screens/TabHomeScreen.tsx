import * as React from 'react';
import { useEffect } from 'react';
import { BackHandler, StyleSheet, Dimensions } from 'react-native';
import AlertExitApp from '../components/AlertExitApp';
import MapView, {Marker} from 'react-native-maps';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';
import TotalizerVax from '../components/TotalizerVax';

export default function TabHomeScreen({navigation}: RootTabScreenProps<'TabHome'>) {

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
      <View style= {styles.containerTotalizer}>
        <TotalizerVax description = {"Quantidade de vacinas tomadas"} totalizer = {60}></TotalizerVax>
        <TotalizerVax description = {"Quantidade vacinas agendadas"} totalizer = {60}></TotalizerVax>
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
              icon = {require('../assets/images/vax-marker-icon.png')}
              >
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.611321151942796, 
              longitude: -46.621598166946754,
              }}
              title= 'UBS Jarim da Saúde'
              description='R. Domingos de Rogatis, 187 - Jarim da Saúde'
              icon = {require('../assets/images/vax-marker-icon.png')}
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.612353611659124, 
              longitude: -46.60380415954848, 
              }}
              title= 'UBS Moinho Velho II'
              description='R. Belgrado, 323 - Vila Moinho Velho'
              icon = {require('../assets/images/vax-marker-icon.png')}
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.596427663124548, 
              longitude: -46.60952657671806,
              }}
              title= 'Hospital Dom Alvarenga'
              description='Av. Nazaré, 1361 - Ipiranga'
              icon = {require('../assets/images/vax-marker-icon.png')}
              >              
            </Marker>
            <Marker
              coordinate={{
              latitude: -23.603866648014836, 
              longitude: -46.623413953844114,
              }}
              title= 'UBS Prof Jandira Massur'
              description='Rua Dom Lúcio de Sousa, 372 - Vila Gumercindo'
              icon = {require('../assets/images/vax-marker-icon.png')}
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
  containerTotalizer: {
    flexDirection: 'row',
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
  qtdVacina: {
    fontSize: 40
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