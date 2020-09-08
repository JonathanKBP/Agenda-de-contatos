import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ContatoItem = props => {
  return(
    <View style={estilos.contatoNaLista}>
        <Text style={estilos.textoDaLista}>{props.contato[0]} : {props.contato[1]}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CAD8E0',
    marginBottom: 8,
    borderRadius: 8
  }
})

export default ContatoItem;