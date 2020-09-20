import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from 'react-navigation';
import ListaDeContatoTela from '../screen/ListaDeConatatoTela';
import NovoContatoTela from '../screen/NovoContatoTela';

const ContatoNavigator = createStackNavigator ({
  ListaDeContatos: ListaDeContatoTela,
  NovoContato: NovoContatoTela,
}, {
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: Platform.OS === 'android' ? Cores.primary : 'white',
    },
    headerTintColor: Platform.OS === 'android' ? 'white' : Cores.primary
  }
});

export default createAppContainer(ContatoNavigator);