import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useRef, useState } from 'react';
import { View, KeyboardAvoidingView, StyleSheet, Image, Alert, Keyboard, TouchableWithoutFeedback, SafeAreaView, ActivityIndicator } from 'react-native';
import { TextInputMask } from 'react-native-masked-text';
import { Button, HelperText, TextInput } from 'react-native-paper';
import axios from 'axios';
import LoginModelOutput from '../models/LoginModelOutput';
import LoginModelInput from '../models/LoginModelInput';
import * as SecureStore from 'expo-secure-store';
import { ScrollView } from 'react-native-gesture-handler';
import Colors from '../constants/Colors';

export default function LoginScreen() {
  const navigation = useNavigation();
  
  const [cpf, setCPF] = useState('');
  const [hasErrors, setHasErrors] = useState(false);
  const [password, setPassword] = useState('')
  const cpfRef = useRef(null);
  const [codigoCidado, setCodigoCidado] = useState(0);
  const [load, setLoad] = useState(false);

  const validar = async () => {
    if (cpf.trim().length===0 || password.trim().length===0)
    {
      setHasErrors(true);
      Alert.alert('Campos inválidos!');
      return;
    }
    await checkLogin();
    if(codigoCidado <= 0)
    {
      Alert.alert('Cpf ou Senha inválidos!');
      return;
    }
    return navigation.navigate('Root');
  }

  const checkLogin = async () => 
  {
    setLoad(true);
    const request: LoginModelInput = {
      cpf : Number(cpf),
      senha: password
    };    

    await axios.post<LoginModelOutput>('https://corporate-f5.herokuapp.com/Autenticacao', request)
    .then(async (response) => {
      setCodigoCidado(response.data.idCidadao);
      await SecureStore.setItemAsync('secure_cidadao_id', String(codigoCidado));
      setLoad(false);
    })
    .catch(() => {
      setCodigoCidado(0);
      setLoad(false);
      Alert.alert("Atenção!","Não foi possível carregar as informações!");
    });
  }

  const navigateToRegister = () => {
    return navigation.navigate('RegisterScreen')
  }

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.horizontal, !load && {display: 'none'}]}>
        <ActivityIndicator size="large" color={Colors.dark.tabIconSelected} />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={[styles.background, !load && {display: 'flex'}]}>
          <View style={styles.containerLogo}>
            <Image
            style={styles.logo}
            source={require('../assets/images/logo2.png')  }
            />
          </View>
          <View style={styles.container}>
            <ScrollView style={styles.scrollView}>
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
              <HelperText type="error" visible={hasErrors && cpf.trim().length===0}>
              Campo CPF é obrigatório
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
              <HelperText type="error" visible={hasErrors && password.trim().length===0}>
              Campo Senha é obrigatório
              </HelperText>
              <Button mode='contained' style = {styles.buttonLogin} onPress={validar}>Login</Button>
              <Button mode='text' style = {styles.buttonRegister} onPress={navigateToRegister}>criar nova conta</Button>
            </ScrollView>
          </View>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    display: 'none',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  safeAreaView: {
    flex: 1,
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
    flex: 2,
    alignItems: 'center',
    width: '90%',
  },
  scrollView: {
    flex: 1,
    width: '90%',
  },
  input: {
    color: '#222',
    fontSize: 20,
    padding: 8,
  },
  buttonLogin: {
    padding: 4,
    marginTop: 30,
    borderRadius: 25,
  },
  buttonRegister: {
    padding: 4,
    marginTop: 40,
    borderRadius: 25,
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});