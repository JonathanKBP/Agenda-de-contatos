import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import Cores from "../constantes/Cores";

import AdicionarContatosTela from '../telas/AdicionarContatoTela';
import ListarContatosTela from '../telas/ListarContatosTela';

const ContatosNavigator = createStackNavigator({
  ListarContatos: ListarContatosTela,
  AdicionarContatos: AdicionarContatosTela
},{
  defaultNavigationOptions:{
    headerStyle:{
      backgroundColor: Platform.OS === 'android' ? Cores.primary: 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
});

export default createAppContainer(ContatosNavigator);