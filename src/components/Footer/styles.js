import styled from 'styled-components';

export const FooterContainer = styled.div`
  padding: 10px 20px;
  background: rgb(32, 35, 41);
`;

export const TextBlock = styled.div`
  text-align: center;
  font-size: ${(props) => (props.copyright ? '12px' : '16px')};
  color: rgb(158, 158, 158);

  &:last-child {
    margin-bottom: 0;
  }
`;
