import React from 'react';
import { element } from 'prop-types';
import { ContentContainer } from './styles';

const Content = ({ children }) => (
  <ContentContainer>
    {children}
  </ContentContainer>
);

Content.propTypes = {
  children: element.isRequired
};

export default Content;
