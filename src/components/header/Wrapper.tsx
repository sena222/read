import styled from 'styled-components'
// lib
import palette from 'lib/styles/palette'
import zIndex from 'lib/styles/zIndex'

const Wrapper = styled.div`
  position: sticky;
  width: 100%;
  height: 20px;
  left: 0;
  top: 0;
  background-color: ${palette.white};
  z-index: ${zIndex.header};
`;

export default Wrapper