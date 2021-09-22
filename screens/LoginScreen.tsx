import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useRef, useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Image, Alert } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, TextInput } from 'react-native-paper';

export default function LoginScreen() {
  const navigation = useNavigation()
  
  const [cpf, setCPF] = useState('');
  const [password, setPassword] = useState('')
  const cpfRef = useRef(null);

  const validar = () => {
    if (cpf.trim().length ===0 && password.trim().length===0) {
      return Alert.alert('Atenção','O Campo CPF e Senha são obrigatórios')
    }
    else if (cpf.trim().length===0) {
      return Alert.alert('Atenção','O Campo CPF é obrigatório')
    }
    else if (password.trim().length===0) {
      return Alert.alert('Atenção','O Campo Senha é obrigatório')
    }
    else {
      return navigation.navigate('Root')
    }
  }
  
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
                type={"custom"}
                options={{
                  mask: '999.999.999-99'
                }}
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
          <Button mode='contained' style = {styles.buttonView} onPress={validar}>Login</Button>
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
    marginTop: 30,
    borderRadius: 25
  }
});