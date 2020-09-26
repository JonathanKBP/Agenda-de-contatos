import React, { useState } from 'react';

import {
  View,
  StyleSheet
} from 'react-native';

import ContatoInput from '../components/ContatoInput';

const NovoContatoTela = (props) => {
  
  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (10);

  const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 2);
      return [{key: contadorContatos.toString(), value:contato}, ...contatos]
    });
  }
  
  return (
    <View>
      <ContatoInput onAdicionarContato={adicionarContato}/>
    </View>
  )
}

const estilos = StyleSheet.create({

});

export default NovoContatoTela;
