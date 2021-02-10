import React, { useEffect } from 'react';
import { object, array, bool } from 'prop-types';
import { connect } from 'react-redux';
import {
  setCurrentCharacter,
  getCharacter,
  unsetCurrentCharacter
} from '../../redux/actions'

const CharacterPage = ({ match, currentCharacter, characters, loading, getCharacter }) => {
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

  const getCurrentCharacter = () => {
    const character = characters.find(char => char.id === match.params.id);

    if (character) {
      setCurrentCharacter(character);
    }
    
    if (!character && !loading) {
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
    getCurrentCharacter()

    return () => {
      unsetCurrentCharacter();
    };
  }, []);

  return (
    <div>
      <img src={image} alt={name} />
      <div>{name}</div>
      <div>{status}</div>
      <div>{species}</div>
      <div>{type}</div>
      <div>{gender}</div>
      <div>{origin && origin.name}</div>
      <div>{location && location.name}</div>
      <div>{getEpisodes()}</div>
    </div>
  );
};

CharacterPage.propTypes = {
  match: object.isRequired,
  characters: array.isRequired,
  currentCharacter: object,
  loading: bool.isRequired
};

const mapStateToProps = ({
  charactersData: { characters, currentCharacter, loading }
}) => ({ characters, currentCharacter, loading });

const mapDispatchToProps = (dispatch) => ({
  setCurrentCharacter: (character) => dispatch(setCurrentCharacter(character)),
  unsetCurrentCharacter: () => dispatch(unsetCurrentCharacter()),
  getCharacter: (id) => dispatch(getCharacter(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);
