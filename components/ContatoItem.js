import React from 'react';
import {View, Text, StyleSheet } from 'react-native';

const ContatoItem = props => {
  return(
    <View style={estilos.contatoNaLista}>
        <Text>{props.contato}</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CCC',
    borderBottomColor: '#000',
    borderWidth: 1,
    marginBottom: 8,
    borderRadius: 8
  }
})

export default ContatoItem;