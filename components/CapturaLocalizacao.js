import React, { useState } from 'react';
import {
  View,
  Button,
  Text,
  ActivityIndicator,
  Alert,
  StyleSheet
} from 'react-native';

import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'

import Cores from '../constantes/Cores';
import PreviewDoMap from './PreviewDoMap';

const CapturaLocalizacao = (props) => {
  const [estaCapturando, setEstaCapturando]= useState(false);
  const [localizacao, setLocalizacao] = useState();
  const verificarPermissoes = async () => {
    const resultado = await Permissions.askAsync(Permissions.LOCATION);
    if (resultado.status !== "granted") {
      Alert.alert(
        'Sem permissão para uso do mecanismo de localização',
        "É preciso liberar acesso ao mecanismo de localização",
        [{ text: "Ok" }]
      )
      return false;
    }
    return true;
  }

  const capturarLocalizacao = async () => { 
    const temPermissao = verificarPermissoes();
    if (temPermissao){
      setEstaCapturando(true);
      try {
        const localizacao = await Location.getCurrentPositionAsync({ timeout: 8000 });
        setLocalizacao({
          lat: localizacao.coords.latitude,
          lng: localizacao.coords.longitude
        });
      }
      catch (err) {
        Alert.alert(
          "Impossível obter localização",
          "Tente novamente mais tarde ou escolha uma no mapa",
          [{ text: "Ok" }]
        );
      }
      setEstaCapturando(false);
    }
  };    
  return (
    <View style={estilos.capturaLocalizacao}>            
      <PreviewDoMap style={estilos.previewDoMapa} localizacao={localizacao}>                
        {
          estaCapturando ?
            <ActivityIndicator
              size="large"
              color={Cores.primary}
            /> :
            <Text>Nenhuma localização disponível.</Text>
        }          
      </PreviewDoMap>            
      <Button                
        title="Obter localização"               
        color={Cores.primary}                
        onPress={capturarLocalizacao}            
      />        
    </View>    
  );
}

const estilos = StyleSheet.create({
  capturaLocalizacao: {
    marginBottom: 15
  },
  previewDoMapa: {
    marginBottom: 10,
    width: '100%',
    height: 150,
    borderColor: '#DDD',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }

})

export default CapturaLocalizacao;