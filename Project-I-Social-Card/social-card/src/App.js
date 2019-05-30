import React from 'react';
import './App.css';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import FooterContainer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div className="app">
      <HeaderContainer />
      <CardContainer />
      <FooterContainer />
    </div>
  );
};

export default App;
