import { ADD_CONTATO } from "./contatos-actions";
import  Contato  from '../modelo/Contato'

const estadoInicial = {
  contatos: []
};

export default (estado = estadoInicial, action) => {
  switch (action.type){
    case ADD_CONTATO:
      const contato = new Contato (new Date().toString(), action.dadosContato.nomeContato, action.dadosContato.numeroContato, action.dadosContato.imagemURI)
      return {
        contatos: estado.contatos.concat(contato)
      }
    default:
      return estado;
      
  }
}