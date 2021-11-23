import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { useRef, useState } from 'react';
import { View,Text,KeyboardAvoidingView, StyleSheet, Image, Alert, Keyboard, TouchableWithoutFeedback, SafeAreaView } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { TextInputMask } from 'react-native-masked-text';
import { Button, TextInput } from 'react-native-paper';

export default function RegisterScreen() {
  const navigation = useNavigation()
  
  const cpfRef = useRef(null);
  const rgRef = useRef(null);
  const dtNascRef = useRef(null);
  const ufRef = useRef(null);
  const CEPRef = useRef(null);

  const [cpf, setCPF] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [password, setPassword] = useState('')
  const [RepeatPassword, setRepeatPassword] = useState('')
  const [email, setEmail] = useState('');
  const [dtNasc, setDtNasc] = useState('');
  const [rg, setRg] = useState('');
  const [sexo, setSexo] = useState('');
  const [nomeMae, setNomeMae] = useState('');
  const [logradouro, setLogradouro] = useState('');
  const [numEnder, setNumEnder] = useState('');
  const [complemento, setComplemento] = useState('');
  const [bairro, setBairro] = useState('');
  const [cidade, setCidade] = useState('');
  const [UF, setUF] = useState('');
  const [pais, setPais] = useState('');
  const [CEP, setCEP] = useState('');

  const navigateToLogin = () => {
    return navigation.navigate('LoginScreen')
  }

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
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
    <KeyboardAvoidingView style={styles.background}
      behavior="padding">
      <SafeAreaView style={styles.containerLogo}>
        <Text style={styles.title}>Criar nova conta</Text>
      </SafeAreaView>
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <TextInput 
            style={styles.input}  
            label='Primeiro Nome'
            value={firstName}
            onChangeText={(text) => {
            setFirstName(text);
            }}>
          </TextInput>
          <TextInput 
            style={styles.input}  
            label='Último Nome'
            value={lastName}
            onChangeText={(text) => {
            setLastName(text);
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
        </View>
        </ScrollView>
        <View style={styles.containerButton}>  
        <Button mode='contained' style = {styles.buttonView} onPress={validar}>Cadastrar</Button>
        <Button mode='text' style = {styles.buttonView} onPress={navigateToLogin}>Já possui conta? Login</Button>
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
  scrollView: {
    flex: 1,
    width: '100%'
    
  },
  containerLogo: {
    justifyContent: 'center',
    marginTop: 100,
    marginBottom: 70,
  },
  divider: {
    borderColor: '#054C63',
    borderWidth: 1,
    borderRadius: 10,
    width: '80%',
    height: 0
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
    flex: 1,
    width: '90%',
    marginBottom: 15,
    color: '#222',
    fontSize: 20,
    padding: 15,
  },
  containerButton: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    width: '90%',
    marginBottom: 50
  },
  buttonView: {
    width: '90%',
    padding: 4,
    marginTop: 30,
    borderRadius: 25
  },
});