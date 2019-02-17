import React from 'react';

import './styles.css';

// Stateless components - Criando componentes apenas com FUNÇÕES - utiliza-se essa sintaxe

// Quando utilizar? Quando houver estado, não usar stateless!!! 
const Header = () => <header id="main-header">JSHunt</header>
// Equivale a :
/*
class Header extends Component {
  render() {
    return <h1>Hello!</h1>
  }
}
*/

export default Header;