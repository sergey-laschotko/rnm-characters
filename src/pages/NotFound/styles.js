import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NotFoundContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Error404 = styled.div`
  margin-bottom: 10px;
  font-size: 60px;
  line-height: 60px;
  color: rgb(245, 245, 245);
`;

export const ErrorText = styled.div`
  margin-bottom: 10px;
  font-size: 24px;
  color: rgb(245, 245, 245);
`;

export const StyledLink = styled(Link)`
  color: rgb(245, 245, 245);
`;
