import { ADD_CONTATO, LISTA_CONTATOS } from "./contatos-actions";
import  Contato  from '../modelo/Contato'

const estadoInicial = {
  contatos: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case ADD_CONTATO:
      //const contato = new Contato (new Date().toString(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagemURI)
      const contato = new Contato (action.dadosContato.id.toString(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagemURI )
      console.log(contato);
      return {
        contatos: estado.contatos.concat(contato)
      }
    case LISTA_CONTATOS:
      return{
        contatos: action.contatos.map(c => new Contato(c.id.toString(), c.nome, c.imagemURI, c.numero))
      }  
    default:
      return estado;
      
  }
}

export const buscarContatos = () => {
  const promise = new Promise ((resolve, reject) => {
    db.transaction((tx) => {
      tx.executeSql(
        `SELECT * FROM tb_contato;`,
        [],
        (_, resultado) => {resolve(resultado)},
        (_, err) => {reject(err)}
      );
    })
  });
  return promise;
}