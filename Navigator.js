import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import ContatoTela from './telas/ContatoTela';
import AdicionarContatoTela from './telas/AdicionarContatoTela';

const Contato = createStackNavigator({
  ContatosTela: RContatosTela,
  AdicionarContatoTela: AdicionarContatoTela
});

export default createAppContainer(Navigator);