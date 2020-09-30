export const ADD_CONTATO = 'ADD_CONTATO';

export const addContato = (nomeContato, numeroContato, imagemURI) => {
  return {
    type: ADD_CONTATO, dadosContato: {nomeContato: nomeContato, numeroContato: numeroContato,  imagemURI: imagemURI}
  }
}