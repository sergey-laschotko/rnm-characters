import React from 'react';
import CharactersList from '../../components/CharactersList';

import {
  HomePageContainer,
  HomePageContent,
  HomePageTitle
} from './styles';

const HomePage = ({
  characters,
  nextPage,
  loading,
  error,
  loadCharacters
}) => (
  <HomePageContainer>
    <HomePageContent>
      <HomePageTitle>Characters</HomePageTitle>
      <CharactersList />
    </HomePageContent>
  </HomePageContainer>
);

export default HomePage;
