import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';
//import ContatoInput from '../components/ContatoInput';
import { useDispatch } from 'react-redux';
import * as contatosActions from '../store/contatos-actions';
import TiraFoto from '../components/TiraFoto';

const AdicionarContatosTela = (props) => {

  const dispatch = useDispatch();
  
  const [nomeContato, setNomeContato] = useState('');
  const [numeroContato, setNumeroContato] = useState('');
  const [imagemURI, setImagemURI] = useState ();

  const novoNomeContato = (texto) => {
    setNomeContato(texto);
  }

  const novoNumeroContato = (texto) => {
    setNumeroContato(texto);
  }

  const fotoTirada = imagemURI => {
    setImagemURI(imagemURI);
  }

  const adicionarContato = () => {
    dispatch(contatosActions.addContato(nomeContato, numeroContato, imagemURI));
    props.navigation.goBack();
  }

  /*const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 2);
      return [{key: contadorContatos.toString(), value:contato}, ...contatos]
    });
  }*/

  /*return (
    <View style={estilos.telaPrincipalView}>
      <ContatoInput onAdicionarContato={adicionarContato}></ContatoInput>
    </View>
  )*/

  return (
    <View style={estilos.telaPrincipalView}>
      <View style={estilos.lembreteView}>
        <View style={estilos.textoEInput}>
          <Text style={estilos.text}>Nome:    </Text>
          <TextInput 
            placeholder="Nome Sobrenome"
            style={estilos.contatoTextInput}
            onChangeText={novoNomeContato}
            value={nomeContato}
          />
        </View>

        <View style={estilos.textoEInput}>
          <Text>Numero:</Text>
          <TextInput 
            placeholder="(11) 91111-1111"
            style={estilos.contatoTextInput}
            onChangeText={novoNumeroContato}
            value={numeroContato}
          />
        </View>

        <TiraFoto onFotoTirada={fotoTirada}/>

        <Button 
          title="inserir"
          color="#2bb140"
          onPress={() => {
            adicionarContato()
            setNomeContato('')
            setNumeroContato('')
          }}
        />
      </View>
    </View>
  )

}

const estilos = StyleSheet.create({
  telaPrincipalView: {
    padding: 50,
    flex:1,
    backgroundColor: '#f0f0f7'
  },
  lembreteView: {
    marginBottom: 5
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

export default AdicionarContatosTela;