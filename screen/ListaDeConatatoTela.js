import React, {useState} from 'react';

import {
  View,
  StyleSheet,
  FlatList, 
  Platform
} from 'react-native';

import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import ContatoItem from '../components/ContatoItem';
import NovoContatoTela from './NovoContatoTela';

const ListaDeContatoTela = (props) => {
  const listas = ["test", "test", "test", "test"] 
  return (
    <View>
      <FlatList 
        data={listas}
        renderItem={
          contato => (
            <ContatoItem
              chave={contato.item.key} 
              contato={contato.item.value}
            />
          )
        }
      />
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