import React, { useState } from 'react';
import { Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  FlatList  
} from 'react-native';

export default function App() {

  const [contatos, setContatos] = useState ([]);
  const [contadorContatos, setContadorContatos] = useState (10);

  const ContatoItem = props => {
    return(
      <View style={estilos.contatoNaLista}>
          <Text style={estilos.textoDaLista}>{props.contato[0]} : {props.contato[1]}</Text>
      </View>
    );
  }
  

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

  const adicionarContato = (contato) => {
    setContatos ((contatos) => {
      setContadorContatos (contadorContatos + 2);
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
    padding: 50,
    flex:1,
    backgroundColor: '#f0f0f7'
  },
  contatoNaLista: {
    padding: 12,
    backgroundColor: '#CAD8E0',
    marginBottom: 8,
    borderRadius: 8
  },

});