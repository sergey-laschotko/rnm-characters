import React from 'react';
import {
  NotFoundContainer,
  Error404,
  ErrorText,
  StyledLink
} from './styles';

const NotFoundPage = () => (
  <NotFoundContainer>
    <Error404>404</Error404>
    <ErrorText>There is no page with this URL.</ErrorText>
    <StyledLink to="/">Go to characters page</StyledLink>
  </NotFoundContainer>
);

export default NotFoundPage;
