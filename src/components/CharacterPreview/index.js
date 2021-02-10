import React from 'react';
import { object } from 'prop-types';
import {
  CharacterPreviewContainer,
  CharacterPreviewContent,
  StyledLink,
  CharacterImage,
  CharacterName,
  CharacterText
} from './styles';

const CharacterPreview = ({ character }) => {
  const {
    id,
    name,
    image,
  } = character;

  return (
    <CharacterPreviewContainer>
      <StyledLink to={`/character/${id}`}>
        <CharacterPreviewContent>
          <CharacterImage src={image} alt={name} />
          <CharacterName>
            <CharacterText>Name:</CharacterText>
            {name}
          </CharacterName>
        </CharacterPreviewContent>
      </StyledLink>
    </CharacterPreviewContainer>
  );
};

CharacterPreview.propTypes = {
  character: object.isRequired
};

export default CharacterPreview;
