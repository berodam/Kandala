import styled from 'styled-components';

const Spacer = styled.div`
  margin-bottom: ${(props) => props.height || '10px' };
`;

export default Spacer;

