import React from 'react';
import { element } from 'prop-types';

import { ErrorContainer } from './styles';

const Error = ({ children }) => (
  <ErrorContainer>
    {children}
  </ErrorContainer>
);

Error.propTypes = {
  children: element.isRequired
};

export default Error;
