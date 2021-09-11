import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { Accessory, Avatar} from 'react-native-elements';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { Feather } from '@expo/vector-icons';

const FirstName = 'Rodrigo'
const LastName = 'Occhiuto'

export default function TabProfileScreen() {
  return (
    
    <SafeAreaView style={styles.container}>
      
      <View style={styles.picture}>
        <Avatar
          source={{
            uri: 'https://i.pinimg.com/originals/4c/41/ef/4c41eff22888e5e5d8277cf5121691db.png'
          }}
          size={140}
        />
        <View style={styles.ViewTitle}>
          <Text style={styles.title}>Olá, {FirstName}</Text>
        </View>
      </View>
      <View style={styles.detail}>
        <View style={styles.input}>
          <FontAwesome name='user-o'size={20} style={styles.icon}/>
          <Text style={styles.content}>{FirstName}</Text>
        </View>
        <View style={styles.input}>
          <FontAwesome name='user-o'size={20} style={styles.icon}/>
          <Text style={styles.content}>{LastName}</Text>
        </View>
        <View style={styles.input}>
          <Feather name='phone'size={20} style={styles.icon}/>
          <Text style={styles.content}>Celular</Text>
        </View>
        <View style={styles.input}>
          <FontAwesome name='envelope-o'size={20} style={styles.icon}/>
          <Text style={styles.content}>Email</Text>
        </View>
        <View style={styles.input}>
          <FontAwesome name='globe'size={20} style={styles.icon}/>
          <Text style={styles.content}>País</Text>
        </View>
        <View style={styles.input}>
          <Icon name='map-marker-outline'size={20} style={styles.icon}/>
          <Text style={styles.content}>Cidade</Text>
        </View>
        
      </View>
      
      
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  picture: {
    flex: 0,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40

  },

  ViewTitle: {
    marginTop: 20,
  },

  title: {
    fontSize: 20
  },

  content: {
    fontSize: 20,
    color: 'grey',
    
  },
  detail: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    height: 500,
    width: '100%',
    marginTop: 20
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
  }

  
});
