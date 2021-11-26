import * as React from 'react';
import { ActivityIndicator, Alert, SafeAreaView, StyleSheet } from 'react-native';
import { Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import { Text, View } from '../components/Themed';
import { ScrollView } from 'react-native-gesture-handler';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import ProfileModel from '../models/ProfileModel';
import axios from 'axios';
import Colors from '../constants/Colors';
import AlertExitApp from '../components/AlertExitApp';
import * as SecureStore from 'expo-secure-store';

export default function TabProfileScreen() {

  useEffect(() =>{
    getProfile();
  }, []);

  const [profile, setProfile] = useState<ProfileModel>();
  const [load, setLoad] = useState(true);

  const navigation = useNavigation();
  const checkAppExit = () => 
  {
    AlertExitApp(async () => 
    {
      await SecureStore.setItemAsync('secure_cidadao_id', "0");
      navigation.navigate('LoginScreen');
    });
  }

  const getProfile = async () => 
  {
    let cidadaoId = await SecureStore.getItemAsync('secure_cidadao_id');

    await axios.get<ProfileModel>('https://corporate-f5.herokuapp.com/Cidadao/'+ cidadaoId)
    .then((response) => {
      setProfile(response.data);
      setLoad(false);
    })
    .catch(() => {
      Alert.alert("Atenção!","Não foi possível carregar as informações!");
    });
  }
  
  return (
    <SafeAreaView style={styles.container}>
        <View style={[styles.horizontal, !load && {display: 'none'}]}>
          <ActivityIndicator size="large" color={Colors.dark.tabIconSelected} />
        </View>
      <ScrollView style = {[styles.scrollView, !load && {display: 'flex'}]}>
        
        <View style={styles.picture}>
          <Avatar avatarStyle={styles.avatar}
            source={{
              uri: 'https://st3.depositphotos.com/6672868/13701/v/380/depositphotos_137014128-stock-illustration-user-profile-icon.jpg'
            }}
            size={120}
          />
          <View style={styles.ViewTitle}>
            <Text style={styles.title}>{"Olá,"} {profile?.nome.split(' ')[0]}</Text>
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.input}>
            <FontAwesome name='user-o' size={17} style={styles.icon}/>
            <Text style={styles.content}>{profile?.nome}</Text>
          </View>
          <View style={styles.input}>
            <FontAwesome name='envelope-o' size={17} style={styles.icon}/>
            <Text style={styles.content}>{profile?.email}</Text>
          </View>
          <View style={styles.input}>
            <FontAwesome name='globe' size={17} style={styles.icon}/>
            <Text style={styles.content}>{profile?.pais}</Text>
          </View>
          <View style={styles.input}>
            <Icon name='map-marker-outline' size={17} style={styles.icon}/>
            <Text style={styles.content}>{profile?.uf}/{profile?.cidade}, {profile?.bairro}, Nº {profile?.numeroEndereco}</Text>
          </View>
          <View style={styles.input}>
            <Icon name='map' size={17} style={styles.icon}/>
            <Text style={styles.content}>{profile?.logradouro}</Text>
          </View>
          <View  style = {styles.logout}>
            <Button mode='contained'onPress={checkAppExit} >Sair</Button>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    display: 'none',
  },
  containerLoad: {
    flex: 1,
    justifyContent: "center"
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
  picture: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  avatar: {
    borderRadius: 100
  },
  ViewTitle: {
    marginTop: 20,
  },
  title: {
    fontSize: 17
  },
  content: {
    fontSize: 17,
    color: 'grey',
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    backgroundColor: '#fff',
    height: '100%',
    width: '100%',
    marginTop: 20,
    paddingTop: 30
  },
  input: {
    paddingBottom: 5,
    width: '90%',
    marginBottom: 30,
    marginTop: 10,
    backgroundColor: '#fff',
    borderBottomColor: 'rgba(158, 150, 150, .3)',
    borderBottomWidth: 2,
    flexDirection: 'row',
    alignItems: 'center'
  },
  icon: {
    marginRight: 10
  },
  logout: {
    width: '90%',
    marginBottom: 20,
  }
});