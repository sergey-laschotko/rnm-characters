import React from 'react';
import Pages from './pages';
import Header from './components/Header';
import Content from './components/Content';
import Footer from './components/Footer';

import { AppContainer } from './App.styles';

const App = () => (
  <AppContainer>
    <Header />
    <Content>
      <Pages />
    </Content>
    <Footer />
  </AppContainer>
);

export default App;
