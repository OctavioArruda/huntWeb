import React, { Component } from 'react';
import api from './services/api';
import Routes from './routes';

import './styles.css';

import Header from './components/Header';
import Main from './pages/main';

const App = () => (
  <div className="App"> 
    <Header />
    <Routes />
  </div>
);

/*
class App extends Component {
  render() {  // Cada componente possui um render
    return (  // Cada render() method retorna um conteúdo JSX
      // Usa-se class name no lugar de class!
      <div className="App"> 
        <h1>Hello Rocket City</h1>
      </div>
    );
  }
}
*/

export default App;
