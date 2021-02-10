import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterContainer = styled.div`
  width: 100%;
  background: rgb(36, 40, 47);
`;

export const CharacterContent = styled.div`
  padding: 0 20px;
  margin: 0 auto;
  max-width: 1440px;
`;

export const CharacterImage= styled.img`
  margin: 40px 0 20px;
  display: block;
  border-radius: 8px;
`;

const getCharacterIconColor = (props) => {
  if (props.status === 'Alive') {
    return 'rgb(85, 204, 68)';
  } else if (props.status === 'Dead') {
    return 'rgb(214, 61, 46)';
  } else {
    return 'rgb(32, 35, 41)';
  }
}

export const CharacterStatusIcon = styled.span`
  display: inline-block;
  margin-right: 5px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${getCharacterIconColor};
`;

export const CharacterName = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  color: #f5f5f5;
`;

export const CharacterText = styled.div`
  margin-bottom: 10px;
  font-size: 16px;
  color: #f5f5f5;
`;

export const CharacterSubtext = styled.span`
  margin-right: 5px;
  font-size: 14px;
  color: rgb(158, 158, 158);
`;

export const BackLink = styled(Link)`
  margin-top: 30px;
  display: block;
  text-align: center;
  color: #f5f5f5;
  font-size: 18px;
`;

export const Episode = styled.span`
  margin-right: 5px;
  color: #f5f5f5;
`;
