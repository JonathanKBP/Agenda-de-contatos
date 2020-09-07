import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import ContatoItem from './components/ContatoItem';
import ContatoInput from './components/ContatoInput';


export default function App() {

  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (0);

  const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 1);
      return [{key: contadorContatos.toString(), value:contato}, ...contatos]
    });
  }

  return (
    <View style={estilos.telaPrincipalView}>
    <ContatoInput onAdicionarContato={adicionarContato}/>
    <View>
      <FlatList 
        data={contatos}
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
  </View>
);
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
    padding: 50
  }
});