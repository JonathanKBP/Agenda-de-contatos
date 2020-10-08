import * as FileSystem from 'expo-file-system';
export const ADD_CONTATO = 'ADD_CONTATO';
export const LISTA_CONTATOS = 'LISTA_CONTATOS';

import { buscarContatos, inserirContato } from '../helpers/db';

export const addContato = (nomeContato, imagemURI, numeroContato) => {
  return async dispath =>{
    const nomeArquivo = imagemURI.split("/").pop();
    const novoPath = FileSystem.documentDirectory + nomeArquivo;
    try{
      await FileSystem.moveAsync({
        from: imagemURI,
        to: novoPath
      })
      const resultadoDB = await inserirContato(
        nomeContato,
        novoPath,
        numeroContato
      )
      console.log(resultadoDB);
      dispath ({ type: ADD_CONTATO, dadosContato: {id: resultadoDB.insertId, nomeContato: nomeContato, imagemURI: novoPath, numeroContato: numeroContato}})
    }
    catch (err){
      console.log (err);
      throw err;
    }
  }
}

export const listarContatos = () => {
  return async dispatch => {
    try{
      const resultadoDB = await buscarContatos();
      console.log(resultadoDB)
      dispatch({type: LISTA_CONTATOS, contatos: resultadoDB.rows._array ? resultadoDB.rows._array : []});
    }
    catch(err){
      console.log(err);
      throw err;
    }
  }
}