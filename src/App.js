import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store'


import Header from './components/Header';
import Footer from './components/Footer';

// import CurrentCategory from './components/CurrentCategory';
import Categories from './components/Categories';
import Products from './components/Products';

import './styles/cards.sass'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello Muggle</h1>
        <Categories />
        <Products />
      </div>
    </Provider>
  );
}

export default App;
