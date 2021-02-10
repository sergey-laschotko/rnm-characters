import styled from 'styled-components';

export const StyledList = styled.div`
  & > div {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

export const Loader = styled.div`
  padding: 20px;
  width: 100%;
  text-align: center;
  color: #f5f5f5;
`;