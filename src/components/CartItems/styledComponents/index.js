import styled from 'styled-components';

const StyledCart = styled.View`
  position: absolute;
  bottom: 60px;
  right: 0;
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
