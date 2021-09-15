import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { createRef, useRef, useState } from 'react';
import { View, KeyboardAvoidingView, SafeAreaView, StyleSheet, Image, Text } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen() {

  const navigation = useNavigation()
  
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('')
  const cpfRef = useRef(null);
  
  /*
  tirar os pontos do cpf na chamada da API
  const unmask = cpfRef?.current.isValid();
  */
  
  return (
    <KeyboardAvoidingView style={styles.background}>
      <View style={styles.containerLogo}>
        <Image
        style={styles.logo}
        source={require('../assets/images/logo2.png')  }
        />
      </View>
        <View style={styles.container}>
          
          <TextInput
            style={styles.input}
            label="CPF"
            render={(props) => (
              <TextInputMask
                {...props}
                value={cpf}
                type={"cpf"}
                ref={cpfRef}
                onChangeText={(text) => {
                  props.onChangeText?.(text);
                  setCPF(text);
                }}  
              />
            )}
          />
          <TextInput 
            
            style={styles.input}  
            label='Senha' 
            secureTextEntry={true}
            value={password}
            onChangeText={(text) => {
            setPassword(text);
            }}>
            
          </TextInput>

          <Button mode='contained' style = {styles.buttonView} onPress={() => navigation.navigate('Root')} >Login </Button>
        </View>

      
    </KeyboardAvoidingView>
      
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },

  containerLogo: {
    flex: 1,
    justifyContent: 'center',

  },

  logo: {
    width: 350,
    height: 80
  },

  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '90%',
  },

  input: {
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    padding: 15,
    
  },
  
  buttonView: {
    width: '90%',
    padding: 4,
    marginTop: 30
  }

});




