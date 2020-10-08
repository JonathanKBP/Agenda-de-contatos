import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';
import Cores from '../constantes/Cores';

const ContatoItem = (props) => {

  return (
    <TouchableOpacity style={estilos.contatoItem}>
      <Image
        style={estilos.imagem}
        source={{uri: props.imagem}}
      />
      <View style={estilos.contatoNaLista}>
        <Text style={estilos.textoDaLista}>Nome:       {props.nomeContato}</Text>
        <Text style={estilos.textoDaLista}>Numero:   {props.numeroContato}</Text>
      </View>
    </TouchableOpacity>
  );
}

const estilos = StyleSheet.create({
  contatoItem: {
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingVertical: 15,
    paddingHorizontal: 30,
    flexDirection: 'row',
    alignItems: 'center'
  },
  textoDaLista: {
    marginBottom: 5
  },
  contatoNaLista: {
    padding: 12,
    borderRadius: 8
  }, 
  imagem: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: '#ccc',
    borderColor: Cores.primary,
    borderWidth: 1
  }
})

export default ContatoItem;