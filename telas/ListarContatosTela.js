import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text
} from 'react-native';
import { HeaderButtons, Item } from 'react-navigation-header-buttons';
import BotaoCabecalho from '../components/BotaoCabecalho';
import { Platform } from "react-native";
import ContatoItem from '../components/ContatoItem';
import { useSelector, useDispatch } from 'react-redux';

import * as contatosActions from '../store/contatos-actions';

const ListarContatosTela = (props) => {

  const contatos = useSelector(estado => estado.contatos.contatos);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(contatosActions.listarContatos())
  }, [dispatch]);

  return (

    <View style={estilos.telaPrincipalView}>
      <FlatList
        data={contatos}
        keyExtractor={contato => contato.id}
        renderItem={ contato => 
            <ContatoItem
              nomeContato={contato.item.nome}
              numeroContato={contato.item.numero}
              imagem={contato.item.imagemURI}
          />
        }
      />
    </View>
  )
}

ListarContatosTela.navigationOptions = (dadosNavegacao) => {
  return {
    headerTitle: "Lista de contatos",
    headerRight: 
      <HeaderButtons
        HeaderButtonComponent={BotaoCabecalho}
      >
      <Item 
        title="Adicionar"
        iconName={Platform.OS === 'android' ? 'md-add' : 'ios-add'}
        onPress={() => dadosNavegacao.navigation.navigate('AdicionarContatos')}
      />
      </HeaderButtons>
  }
}

const estilos = StyleSheet.create({
  entradaView: {
    marginBottom: 8

  },
  itemNaListaView: {
    padding: 12,
    backgroundColor: '#CCC',
    borderColor: 'black',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  },
  lembreteTextInput: { 
    borderBottomColor: 'black', 
    borderBottomWidth: 1, 
    marginBottom: 4, 
    padding: 8, 
    textAlign: 'center' 
  },
  telaPrincipalView: {
    flex:1,
    backgroundColor: '#f0f0f7'
  }
});

export default ListarContatosTela;