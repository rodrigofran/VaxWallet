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
      <View style= {styles.containerTotalizer}>
        <View style= {styles.containerTotalizerItem} >
          <TotalizerVax description = {"Quantidade de vacinas tomadas"} totalizer = {14}></TotalizerVax>
        </View>
        <View style= {styles.containerTotalizerItem} >
          <TotalizerVax description = {"Quantidade de vacinas agendadas"} totalizer = {3}></TotalizerVax>
        </View>
      </View>
      <View style={styles.mapView}>
        <Text style={styles.titleMap}>
          Postos de Vacinação Próximos
        </Text>
        <MapView
          style={styles.mapStyle}
          initialRegion={{
            latitude: -23.621100181624158, 
            longitude: -46.61103850647531,
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
  },
  containerTotalizer: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: '#fff',
  },
  containerTotalizerItem: {
    backgroundColor: '#fff',
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'grey'
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