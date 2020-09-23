import React from 'react';

import {
  View,
  StyleSheet,
  Text, Platform
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';

const ListaDeContatoTela = (props) => {
  return (
    <View>
      <Text>ListaDeContatoTela</Text>
    </View>
  )
}

ListaDeContatoTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de Contatos",
    headerRight: 
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}
      >
      <Item 
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => dadosNavegacao.navigation.navigate ('NovoContato')}
      />
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({

});

export default ListaDeContatoTela;