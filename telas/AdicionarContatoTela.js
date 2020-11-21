import React, { useState } from 'react';
import { 
  View, 
  StyleSheet, 
  TextInput, 
  Text, 
  Image, 
  Button, 
  TouchableOpacity
} from 'react-native';

import {
  Picker
} from '@react-native-community/picker';

import Slider from '@react-native-community/slider';

import * as ImagePicker from 'expo-image-picker';

const AdicionarContatoTela = (props) => {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');
  const [fotoURI, setFotoURI] = useState();

  const tirarFoto = async () => {
    let foto = await ImagePicker.launchImageLibraryAsync({
      quality: 1,
      base64: true
    })
    setFotoURI(foto.uri);
  }

  return (
    <View
      style={estilos.container}>
      <TextInput
        style={estilos.nomeTextInput}
        placeholder="Nome do contato"
        onChangeText={(texto) => setNome(texto)}
        value={nome}
      />

      <View
        style={estilos.numero}>
        <TextInput
          style={estilos.numero}
          placeholder="Numero"
          onChangeText={(texto) => setNumero(texto)}
          value={cidade}
        />
      </View>

      <View
        style={estilos.previewImageView}>
          {
            fotoURI ?
              <Image
              style={{ width: '100%', height: '100%' }}
              source={{ uri: fotoURI }}
              /> 
            :
            <Text>Sem foto</Text>
          }
      </View>

      <View
        style={estilos.tirarFotoButton}>
        <Button 
          title="Selecionar foto"
          onPress={() => tirarFoto()}
        />
      </View>

      <TouchableOpacity
        style={estilos.fab}>
          <Text
            style={estilos.iconeFab}>
            OK
          </Text>
      </TouchableOpacity>
    </View>
  );
};

const estilos = StyleSheet.create({
  container: {
    flex: 1,
  },
  nomeTextInput: {
    width: '90%',
    textAlign: 'center',
    padding: 12,
    fontSize: 16,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
    marginVertical: 8,
    alignSelf: 'center'
  },
  numero: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 12
  },
  previewImageView: {
    alignSelf: 'center',
    width: '90%',
    height: 200,
    borderWidth: 1,
    borderColor: '#CCC',
    marginVertical: 9,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tirarFotoButton: {
    width: '90%',
    alignSelf: 'center',
  },
  fab: {
    position: 'absolute',
    width: 56,
    height: 56,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#03A9F4',
    borderRadius: 30,
    elevation: 8
  },
  iconeFab: {
    fontSize: 14,
    color: 'white'
  }
});

export default AdicionarContatoTela;