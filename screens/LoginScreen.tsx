import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp, StackScreenProps } from '@react-navigation/stack';
import * as React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { Button, Card, TextInput } from 'react-native-paper';


import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootStackParamList } from '../types';


//para deixar a tela de login como principal, basta acessar o arquivo App.tsx e apagar todo conteúdo do ProviderPaper e inserir a tag da tela <LoginScreen/> 






export default function LoginScreen() {

  const navigation = useNavigation()
  
  return (
    <SafeAreaView style={styles.content} >
      <View style = {styles.containerView}>
        <Card>
          <Card.Title title='Seja Bem vindo!' titleStyle={styles.title}></Card.Title>
          <Card.Content>
            <TextInput label='email' keyboardType='email-address'></TextInput>
            <TextInput label='senha' secureTextEntry={true} ></TextInput>
            <Button mode='contained' style = {styles.buttonView} onPress={() => navigation.navigate('Root')} >Login </Button>
          </Card.Content>
        </Card>
      </View>  
    </SafeAreaView>  
      
  );
}

const styles = StyleSheet.create({
  content: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#054C63'
  },

  containerView: {
    width: '90%',
  },

  title: {
    color: '#054C63',
    fontWeight: 'bold'
  },

  buttonView: {
    marginTop: 30
  }
  

});




