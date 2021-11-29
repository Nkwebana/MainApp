import styled from 'styled-components';

const StyledCart = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  align-content: flex-end;
  width: 80px;
`;

const StyledCartIcon = styled.View`
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledCounter = styled.Text`
  color: red;
  width: 25px;
`;

export { StyledCart, StyledCartIcon, StyledImage, StyledCounter };
