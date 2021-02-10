import React, { useEffect, Fragment } from 'react';
import { object, array, bool, func } from 'prop-types';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCurrentCharacter,
  unsetCurrentCharacter
} from '../../redux/actions'
import Error from '../../components/Error/';
import Loader from '../../components/Loader';

import {
  CharacterContainer,
  CharacterContent,
  CharacterImage,
  CharacterName,
  CharacterText,
  CharacterSubtext,
  BackLink,
  CharacterStatusIcon,
  Episode
} from './styles';

const CharacterPage = ({
  match,
  currentCharacter,
  characters,
  loadingCharacter,
  getCharacter,
  errorCharacter,
  setCharacter,
  unsetCharacter
}) => {
  const {
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    episode
  } = currentCharacter;

  const getChar = () => {
    const character = characters.find(char => char.id === match.params.id);

    if (character) {
      setCharacter(character);
    }
    
    if (!character && !loadingCharacter) {
      getCharacter(match.params.id);
    }
  };

  const getEpisodes = () => {
    if (!episode) return

    return episode.map(ep => {
      const episodeUrlParts = ep.split('/');

      return episodeUrlParts[episodeUrlParts.length - 1];
    });
  }

  useEffect(() => {
    getChar()

    return () => {
      unsetCharacter();
    };
  }, []);

  return (
    <CharacterContainer>
      <CharacterContent>
        {errorCharacter && <Error>Something went wrong. Try again later</Error>}
        {!name && !errorCharacter && <Loader />}
        {name && (
          <Fragment>
            <CharacterImage src={image} alt={name} />
            <CharacterName>{name}</CharacterName>
            <CharacterText>
              <CharacterSubtext>
                Status:
              </CharacterSubtext>
              <CharacterStatusIcon status={status} />
              {status}
            </CharacterText>
            <CharacterText>
              <CharacterSubtext>
                Species:
              </CharacterSubtext>
              {species}
            </CharacterText>
            <CharacterText>
              <CharacterSubtext>
                Type:
              </CharacterSubtext>
              {type || '-'}
            </CharacterText>
            <CharacterText>
              <CharacterSubtext>
                Gender:
              </CharacterSubtext>
              {gender}
            </CharacterText>
            {origin && origin.name && (
              <CharacterText>
                <CharacterSubtext>
                  Origin:
                </CharacterSubtext>
                {origin.name}
              </CharacterText>
            )}
            {location && location.name && (
              <CharacterText>
                <CharacterSubtext>
                  Location:
                </CharacterSubtext>
                {location.name}
              </CharacterText>
            )}
            <CharacterText>
              <CharacterSubtext>
                Seen in episodes:
              </CharacterSubtext>
              {getEpisodes().map((ep, index, array) => (
              <Episode>{ep}{index === (array.length - 1) ? '' : ','}</Episode>
              ))}
            </CharacterText>
          </Fragment>
        )}
        <BackLink to="/">Go back to characters</BackLink>
      </CharacterContent>
    </CharacterContainer>
  );
};

CharacterPage.propTypes = {
  match: object.isRequired,
  characters: array.isRequired,
  currentCharacter: object,
  loadingCharacter: bool.isRequired,
  errorCharacter: bool.isRequired,
  setCharacter: func.isRequired,
  unsetCharacter: func.isRequired
};

const mapStateToProps = ({
  charactersData: { characters, currentCharacter, loadingCharacter, errorCharacter }
}) => ({ characters, currentCharacter, loadingCharacter, errorCharacter });

const mapDispatchToProps = (dispatch) => ({
  setCharacter: (character) => dispatch(setCurrentCharacter(character)),
  unsetCharacter: () => dispatch(unsetCurrentCharacter()),
  getCharacter: (id) => dispatch(getCurrentCharacter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);
