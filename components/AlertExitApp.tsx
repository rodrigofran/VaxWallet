import { Alert, BackHandler } from 'react-native';


 const AlertExitApp = (callBack: Function | undefined) =>  {
  Alert.alert("Atenção!", "Tem certeza que deseja sair do app?", [
    {
      text: "Não",
      onPress: () => null,
      style: "cancel"
    },
    { text: "Sim", onPress: () => callBack == null ? BackHandler.exitApp() :  callBack()}
  ]);
  return true;
};

export default AlertExitApp;