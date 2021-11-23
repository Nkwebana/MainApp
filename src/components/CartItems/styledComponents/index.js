import styled from 'styled-components';

const StyledCart = styled.View`
  position: absolute;
  bottom: 50px;
  right: 5px;
`;

const StyledCartIcon = styled.TouchableOpacity`
  flex-direction: row;
`;

const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledCounter = styled.Text`
  color: red;
  width: 30px;
`;

export { StyledCart, StyledCartIcon, StyledImage, StyledCounter };
