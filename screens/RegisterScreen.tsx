import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import moment from 'moment';
import * as React from 'react';
import { useRef, useState } from 'react';
import { View,Text,KeyboardAvoidingView, StyleSheet, Alert, Keyboard, TouchableWithoutFeedback, SafeAreaView, ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Button, TextInput } from 'react-native-paper';
import Colors from '../constants/Colors';
import RegisterModel from '../models/RegisterModel';

export default function RegisterScreen() {
  const navigation = useNavigation();
  
  const cpfRef = useRef(null);
  const rgRef = useRef(null);
  const dtNascRef = useRef(null);
  const ufRef = useRef(null);
  const CEPRef = useRef(null);

  const [cpf, setCPF] = useState('');
  const [primeiroNome, setPrimeiroNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [password, setPassword] = useState('')
  const [RepeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('');
  const [dtNasc, setDtNasc] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState(1);
  const [nomeMae, setNomeMae] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numEnder, setNumEnder] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [UF, setUF] = useState('');
  const [pais, setPais] = useState('');
  const [CEP, setCEP] = useState('');
  const [load, setLoad] = useState(false);

  const navigateToLogin = () => {
    return navigation.navigate('LoginScreen')
  }

  const registerApi = async (request:RegisterModel) => 
  {
    setLoad(true);

    await axios.post<RegisterModel>('https://corporate-f5.herokuapp.com​/CadastradoNovoUsuario', request)
    .then(async () => {
      setLoad(false);
      navigateToLogin();
    })
    .catch(() => {
      setLoad(false);
      Alert.alert("Atenção!","Não foi possível finalizar o cadastro, tentar novamente mais tarde!");
    });
  }

  const validar = () => {
    if (primeiroNome.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Primeiro Nome" é obrigatório')
    }
    if (sobrenome.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Último Nome" é obrigatório')
    }
    if (dtNasc.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Data de Nascimento" é obrigatório')
    }
    if (email.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Email" é obrigatório')
    }
    if (rg.trim().length===0) {
      return Alert.alert('Atenção','O Campo "RG" é obrigatório')
    }
    if (rg.trim().length===0) {
      return Alert.alert('Atenção','O Campo "RG" é obrigatório')
    }
    if (nomeMae.trim().length===0) {
      return Alert.alert('Atenção','O Campo "nomeMae" é obrigatório')
    }
    if (cpf.trim().length===0) {
      return Alert.alert('Atenção','O Campo "CPF" é obrigatório')
    }
    if (password.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Senha" é obrigatório')
    }
    if (RepeatPassword.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Confirmação de senha" é obrigatório')
    }
    if (RepeatPassword !== password) {
      return Alert.alert('Atenção','As senha informadas são diferentes')
    }
    if (logradouro.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Logradouro" é obrigatório')
    }
    if (numEnder.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Número" é obrigatório')
    }
    if (complemento.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Complemento" é obrigatório')
    }
    if (bairro.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Bairro" é obrigatório')
    }
    if (cidade.trim().length===0) {
      return Alert.alert('Atenção','O Campo "Cidade" é obrigatório')
    }
    if (UF.trim().length===0) {
      return Alert.alert('Atenção','O Campo "UF" é obrigatório')
    }
    if (pais.trim().length===0) {
      return Alert.alert('Atenção','O Campo "País" é obrigatório')
    }
    if (CEP.trim().length===0) {
      return Alert.alert('Atenção','O Campo "CEP" é obrigatório')
    }

    const request: RegisterModel = {
        nome: primeiroNome + ' ' + sobrenome,
        dataNascimento: moment(dtNasc, 'DD/MM/YYYY').toDate(),
        cpf: Number(cpf.replace(/[^0-9]/g,'')),
        rg: rg,
        email: email,
        sexo: sexo,
        nomeMae: nomeMae,
        senha: password,
        logradouro: logradouro,
        numeroEndereco: Number(numEnder),
        pais: pais,
        uf: UF,
        cidade: cidade,
        bairro: bairro,
        cep: Number(CEP.replace(/[^0-9]/g,'')),
        complemento: complemento
      };
      console.log(request);
      registerApi(request);
  }
  
  return (
    <SafeAreaView style={styles.safeAreaView}>
      <View style={[styles.horizontal, !load && {display: 'none'}]}>
        <ActivityIndicator size="large" color={Colors.dark.tabIconSelected} />
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <KeyboardAvoidingView style={[styles.background, !load && {display: 'flex'}]}>
          <View style={styles.containerLogo}>
            <Text style={styles.title}>Criar nova conta</Text>
          </View>
          <View style={styles.containerScrollView}>
            <ScrollView style={styles.scrollView}>
                <Text style={styles.title2}>Dados pessoais</Text>
                <TextInput 
                  style={styles.input}  
                  label='Primeiro Nome'
                  value={primeiroNome}
                  onChangeText={(text) => {
                  setPrimeiroNome(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Último Nome'
                  value={sobrenome}
                  onChangeText={(text) => {
                  setSobrenome(text);
                  }}>
                </TextInput>
                <TextInput
                  style={styles.input}
                  label="Data de Nascimento"
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={dtNasc}
                      type={"datetime"}
                      options={{
                        format: 'DD/MM/YYYY'
                      }}
                      
                      ref={dtNascRef}
                      onChangeText={(text) => {
                        props.onChangeText?.(text);
                        setDtNasc(text);
                      }}  
                    />
                  )}
                />
                <TextInput 
                  style={styles.input}  
                  label='Email'
                  value={email}
                  onChangeText={(text) => {
                  setEmail(text);
                  }}>
                </TextInput>
                <TextInput
                  style={styles.input}
                  label="RG"
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={rg}
                      type={"custom"}
                      options={{
                        mask: '999999999'
                      }}
                      ref={rgRef}
                      onChangeText={(text) => {
                        props.onChangeText?.(text);
                        setRg(text);
                      }}  
                    />
                  )}
                />
                <TextInput 
                  style={styles.input}  
                  label='Nome da mãe'
                  value={nomeMae}
                  onChangeText={(text) => {
                  setNomeMae(text);
                  }}>
                </TextInput>
                <Text style={styles.title2}>Dados para acesso</Text>
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
                <TextInput 
                  style={styles.input}  
                  label='Senha' 
                  secureTextEntry={true}
                  value={password}
                  onChangeText={(text) => {
                  setPassword(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Digite novamente sua senha.' 
                  secureTextEntry={true}
                  value={RepeatPassword}
                  onChangeText={(text) => {
                  setRepeatPassword(text);
                  }}>
                </TextInput>
                <Text style={styles.title2}>Endereço</Text>
                <TextInput 
                  style={styles.input}  
                  label='Logradouro'
                  value={logradouro}
                  onChangeText={(text) => {
                  setLogradouro(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Número'
                  value={numEnder}
                  onChangeText={(text) => {
                  setNumEnder(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Complemento'
                  value={complemento}
                  onChangeText={(text) => {
                  setComplemento(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Bairro'
                  value={bairro}
                  onChangeText={(text) => {
                  setBairro(text);
                  }}>
                </TextInput>
                <TextInput 
                  style={styles.input}  
                  label='Cidade'
                  value={cidade}
                  onChangeText={(text) => {
                  setCidade(text);
                  }}>
                </TextInput>
                <TextInput
                  style={styles.input}
                  label="UF"
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={UF}
                      type={"custom"}
                      options={{
                        mask: 'AA'
                      }}
                      ref={ufRef}
                      onChangeText={(text) => {
                        props.onChangeText?.(text);
                        setUF(text);
                      }}  
                    />
                  )}
                />
                <TextInput 
                  style={styles.input}  
                  label='País'
                  value={pais}
                  onChangeText={(text) => {
                  setPais(text);
                  }}>
                </TextInput>
                <TextInput
                  style={styles.input}
                  label="CEP"
                  render={(props) => (
                    <TextInputMask
                      {...props}
                      value={CEP}
                      type={"custom"}
                      options={{
                        mask: '99999-999'
                      }}
                      ref={CEPRef}
                      onChangeText={(text) => {
                        props.onChangeText?.(text);
                        setCEP(text);
                      }}  
                    />
                  )}
                />
            </ScrollView>
          </View>
            <View style= {styles.divider} />
            <View style={styles.containerButton}>  
              <Button mode='contained' style = {styles.buttonView} onPress={validar}>Cadastrar</Button>
              <Button mode='text' style = {styles.buttonView} onPress={navigateToLogin}>Já possui conta? Login</Button>
            </View>  
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    display: 'none',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  scrollView: {
    flex: 1,
    width: '100%'
  },
  containerScrollView: {
    flex: 1,
    alignItems: 'center',
    width: '80%'
  },
  containerLogo: {
    justifyContent: 'center',
    marginTop: 40,
  },
  divider: {
    backgroundColor: '#a3a3a3',
    width: '80%',
    height: 1,
    marginTop: 15
  },
  logo: {
    width: 180,
    height: 40
  },
  title: {
    fontSize: 30,
    color: '#515252',
    fontWeight: 'bold'
  },
  title2: {
    marginTop: 50,
    marginBottom: 20,
    textAlign: 'center',
    fontSize: 20,
    color: '#515252',
    fontWeight: 'bold'
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    color: '#222',
    fontSize: 20,
    padding: 8,
  },
  containerButton: {
    alignItems: 'center',
    width: '90%',
  },
  buttonView: {
    width: '90%',
    padding: 4,
    marginTop: 30,
    borderRadius: 25
  },
  horizontal: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10
  },
});