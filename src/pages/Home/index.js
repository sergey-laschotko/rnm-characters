import React, { useEffect } from 'react';
import { object, func } from 'prop-types';
import { connect } from 'react-redux';
import { getCharacters } from '../../redux/actions';

const HomePage = ({ charactersData, loadCharacters }) => {
  useEffect(() => {
    loadCharacters();
  }, []);

  return (
    <div>HomePage 2</div>
  );
};

HomePage.propTypes = {
  charactersData: object.isRequired,
  loadCharacters: func.isRequired
};

const mapStateToProps = ({ charactersData }) => ({ charactersData });

const mapDispatchToProps = (dispatch) => ({
  loadCharacters: (page) => dispatch(getCharacters(page))
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
