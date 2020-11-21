import React from 'react';
import { 
  View, 
  StyleSheet, 
  Text, 
  TouchableOpacity 
} from 'react-native';

const ContatosTela = (props) => {
  return (
    <View style={estilos.container}>
      <Text>Contatos</Text>
      <TouchableOpacity onPress={() =>
        props.navigation.navigate('AdicionarContatoTela')} style={estilos.fab}>
        <Text style={estilos.iconeFab}>+</Text>
      </TouchableOpacity>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1
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
    fontSize: 20,
    color: 'white'
  }
});
export default ContatosTela;