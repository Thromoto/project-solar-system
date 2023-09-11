import React from 'react';
import '../App.css';
import logo from '../images/logo-sistema-solar.png';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <img src={ logo } alt="Sistema Solar" />
      </header>
    );
  }
}

export default Header;
