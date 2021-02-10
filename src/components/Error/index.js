import React from 'react';
import { oneOfType, element, string } from 'prop-types';

import { ErrorContainer } from './styles';

const Error = ({ children }) => (
  <ErrorContainer>
    {children}
  </ErrorContainer>
);

Error.propTypes = {
  children: oneOfType([element, string]).isRequired
};

export default Error;
