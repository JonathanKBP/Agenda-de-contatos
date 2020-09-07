import React, { useState } from 'react';
import { 
  Text,
  View,
  TextInput,
  Button,
  StyleSheet 
} from 'react-native';

const ContatoInput = (props) => {
  const [nomeContato, setNomeContato] = useState('');
  const [numeroContato, setNumeroContato] = useState('');

  const capturarNomeContato = (Nomecontato) => {
    setNomeContato(Nomecontato);
  }
  const capturarNumeroContato = (Numerocontato) => {
    setNumeroContato(Numerocontato);
  }
  return (
    <View style={estilos.contatoView}>
      <Text>Nome:</Text>
      <TextInput 
        placeholder="Nome Sobrenome"
        style={estilos.contatoTextInput}
        onChangeText={capturarNomeContato}
        value={nomeContato}
      />
      <Text>Numero:</Text>
      <TextInput 
        placeholder="(11) 91111-1111"
        style={estilos.contatoTextInput}
        onChangeText={capturarNumeroContato}
        value={numeroContato}
      />
      <Button 
        title="inserir"
        onPress={() => {
          props.onAdicionarContato(contato)
          setContato('')
        }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({

  contatoView: {
    marginBottom: 8
  },
  contatoTextInput: {
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    padding: 2,
    textAlign: 'center',
    marginBottom: 4
  }
});

export default ContatoInput; 