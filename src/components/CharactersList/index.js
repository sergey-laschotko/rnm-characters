import React, { useEffect } from 'react';
import { array, func, string, bool } from 'prop-types';
import { connect } from 'react-redux';
import InfiniteScroller from 'react-infinite-scroller';
import { getCharacters } from '../../redux/actions';
import CharacterPreview from '../../components/CharacterPreview';
import Loader from '../../components/Loader';
import Error from '../../components/Error';

import {
  StyledList
} from './styles';

const CharactersList = ({
  characters,
  nextPage,
  loading,
  error,
  loadCharacters
}) => {
  const loadMore = () => {
    nextPage && !loading && loadCharacters(nextPage);
  }

  useEffect(() => {
    !characters.length && loadCharacters();
  }, []);

  return (
    <StyledList>
      {!!characters.length && (
        <InfiniteScroller
          element="div"
          pageStart={0}
          loadMore={loadMore}
          hasMore={!!nextPage}
          loader={<Loader key={0} />}
        >
          {characters.map(character => <CharacterPreview key={character.id} character={character} />)}
        </InfiniteScroller>
      )}
      {error && (
        <Error>Something went wrong. Try again later.</Error>
      )}
    </StyledList>
  );
};

CharactersList.propTypes = {
  characters: array.isRequired,
  nextPage: string,
  loading: bool,
  error: bool,
  loadCharacters: func.isRequired
};

const mapStateToProps = ({
  charactersData: {
    characters,
    nextPage,
    loading,
    error
  }
}) => ({
  characters,
  nextPage,
  loading,
  error
});

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: (page) => dispatch(getCharacters(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(CharactersList);