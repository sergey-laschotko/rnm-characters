import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const CharacterPreviewContainer = styled.div`
  padding: 10px;
  width: calc(33.33% - 20px);
  min-width: 300px;
  display: flex;
  align-items: center;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  width: 100%;
`;

export const CharacterPreviewContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  background: rgb(60, 62, 68);
  border-radius: 8px;
  overflow: hidden;
  transition: transform 0.1s ease-in;

  &:hover {
    transform: scale(0.95);
  transition: transform 0.1s ease-in;
  }
`;

export const CharacterImage = styled.img`
  width: 50%;
  height: 100%;
  border-radius: 8px;
`;

export const CharacterName = styled.div`
  padding: 20px;
  width: 50%;
  color: #f5f5f5;
  font-size: 16px;
`;

export const CharacterText = styled.div`
  margin-right: 5px;
  color: rgb(158, 158, 158);
  font-size: 12px;
`;