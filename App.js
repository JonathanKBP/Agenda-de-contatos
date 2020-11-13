import React, { useState } from 'react';

import ContatosNaigator from './navegacao/ContatosNaigator';
import { createStore, combineReducers, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import reduxThunk from 'redux-thunk';
import contatosReducer from './store/contatos-reducer';

import { init } from './helpers/db';

init()
.then(() => {
  console.log("criação da base feita com sucesso");
})
.catch((err) => {
  console.log(`Criação da base falhou: ${err}`);
})

const rootReducer = combineReducers({
  contatos: contatosReducer
})
const store = createStore(rootReducer, applyMiddleware(reduxThunk));

export default function App() {

  return (
    <Provider store = {store}>
      <ContatosNaigator />
    </Provider>
  );
}
