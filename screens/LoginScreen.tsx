import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useRef, useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Image, Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, HelperText, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation()
  
  const [cpf, setCPF] = useState('');
  const [errorcpf, seterrorCPF] = useState('');
  const [password, setPassword] = useState('')
  const cpfRef = useRef(null);

  const validar = () => {
    if (cpf.trim().length===0 && password.trim().length===0 ) {
      return Alert.alert('Atenção','O Campo Senha é obrigatório')
    }
    else if (password.trim().length===0) {
      return Alert.alert('Atenção','O Campo Senha é obrigatório')
    }
    else {
      return navigation.navigate('Root')
    }
  }

  const hasErrors = () => {
    return false;
  };

  const navigateToRegister = () => {
    return navigation.navigate('RegisterScreen')
  }

  
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView style={styles.background}
      behavior="padding">
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
              type={"custom"}
              options={{
                mask: '99999999999'
              }}
              ref={cpfRef}
              onChangeText={(text) => {
                props.onChangeText?.(text);
                setCPF(text);
              }}  
            />
          )}
        />
        <HelperText type="error" visible={hasErrors()}>
        Email address is invalid!
        </HelperText>
        <TextInput 
          style={styles.input}  
          label='Senha' 
          secureTextEntry={true}
          value={password}
          onChangeText={(text) => {
          setPassword(text);
          }}>
        </TextInput>
        <Button mode='contained' style = {styles.buttonLogin} onPress={validar}>Login</Button>
        <Button mode='text' style = {styles.buttonLogin} onPress={navigateToRegister}>criar nova conta</Button>
      </View>
    </KeyboardAvoidingView>
    </TouchableWithoutFeedback>  
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
  buttonLogin: {
    width: '90%',
    padding: 4,
    marginTop: 30,
    borderRadius: 25,
    
  },
});