import React, {useState} from 'react';
import { View, Button, Image, Text, StyleSheet } from 'react-native';

import Cores from '../constantes/Cores';

import * as ImagePicker from 'expo-image-picker';

const TiraFoto = (props) => {

  const [imagemURI, setImageURI] = useState();
  
  const tirarFoto = async () => {
    const foto = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [16, 16],
      quality: 1
    });
    setImageURI(foto.uri);
    props.onFotoTirada(foto.uri);
  }
  return (
    <View style={estilos.principal}>
      <View style={estilos.previewDaImagem}>
        {
          !imagemURI ?
          <Text>Nenhuma foto.</Text>
          :
          <Image 
            style={estilos.imagem} 
            source={{ uri: imagemURI}}
          />
        }         
      </View>
      <Button
        title="Escolher foto"
        color={Cores.primary}
        onPress={tirarFoto}
      />
    </View>
  )
};

const estilos = StyleSheet.create({
  principal: {
    alignItems: 'center',
    marginBottom: 15
  },
  previewDaImagem: {
    width: '100%',
    height: 200,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderColor: '#CCC',
    borderWidth: 1
  },
  imagem: {
    width: '100%',
    height: '100%'
  }
});

export default TiraFoto;