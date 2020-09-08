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



  const capturarNomeContato = (nomeContato) => {
    setNomeContato(nomeContato);
  }
  const capturarNumeroContato = (numeroContato) => {
    setNumeroContato(numeroContato);
  }


  return (
    <View style={estilos.lembreteView}>
      <View style={estilos.textoEInput}>
        <Text style={estilos.text}>Nome:    </Text>
        <TextInput 
          placeholder="Nome Sobrenome"
          style={estilos.contatoTextInput}
          onChangeText={capturarNomeContato}
          value={nomeContato}
        />
      </View>

      <View style={estilos.textoEInput}>
        <Text>Numero:</Text>
        <TextInput 
          placeholder="(11) 91111-1111"
          style={estilos.contatoTextInput}
          onChangeText={capturarNumeroContato}
          value={numeroContato}
        />
      </View>

      <Button 
        title="inserir"
        color="#2bb140"
        onPress={() => {
          props.onAdicionarContato([nomeContato, numeroContato])
          setNomeContato('')
          setNumeroContato('')
        }}
      />
    </View>
  );
}

const estilos = StyleSheet.create({
  lembreteView: {
    marginBottom: 5
  },
  text:{
    
  },
  contatoTextInput: {
    borderColor: 'black',
    borderWidth: 1,
    padding: 2,
    flex: 1,
    paddingLeft: 10,
    marginLeft: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
  },
  textoEInput: {
    marginBottom: 5,
    flexDirection:'row', 
    alignItems:"center",
  },
});

export default ContatoInput; 