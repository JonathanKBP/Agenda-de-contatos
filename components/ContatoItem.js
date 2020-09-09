import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity } from 'react-native';

const ContatoItem = props => {
  return(
    <TouchableOpacity onLongPress={props.onDelete.bind(this, props.chave)}>
      <View style={estilos.contatoNaLista}>
          <Text style={estilos.textoDaLista}>{props.contato[0]} : {props.contato[1]}</Text>
      </View>
    </TouchableOpacity>
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