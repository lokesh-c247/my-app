import React from 'react';
import './App.css';
import { Provider } from 'react-redux';
import Store from './redux/store';
import Header from './components/Header';
import Main from './components/Main';

function App() {
  return (
    <Provider store = {Store}>
        <Header/>
        <Main/>
    </Provider>
  );
}

export default App;
