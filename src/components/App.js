import React from 'react';
import HeaderContainer from '../containers/HeaderContainer';
import MainContainer from '../containers/MainContainer';
import GlobalStyle from './GlobalStyles/GlobalStyle'

function App() {
  return (
    <div className="App">
      <GlobalStyle />  
      <HeaderContainer />
      <MainContainer />
    </div>
  );
}

export default App;
