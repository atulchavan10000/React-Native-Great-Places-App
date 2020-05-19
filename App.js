import React from 'react';
import { View } from 'react-native';
import PlacesNavigator from './navigation/PlacesNavigation';
import { Provider } from 'react-redux';
import productsReducer from './store/reducer/products';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';


import ReduxThunk from 'redux-thunk';


//remove below line before deployment
//const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  products: productsReducer,

})

//remove composeWithDevTools before deployement
//const store = createStore(rootReducer, composeEnhancer(applyMiddleware(ReduxThunk)),);

//replace above line with below and remove composeWithDevTools() before deployment
const store = createStore(rootReducer, composeWithDevTools(), applyMiddleware(ReduxThunk));


export default function App() {

  

  return (
    <Provider store= {store}>
      <PlacesNavigator />
    </Provider>
  )
}

