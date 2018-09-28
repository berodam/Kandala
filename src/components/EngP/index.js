import styled from 'styled-components';

export const EngP = styled.p`
  font-family: 'AmaticSC-Bold', serif;
  font-size: ${(props) => props.fontsize || 3}rem;
  color: #777;
  margin: 0 0 0 0.5em;
  border: 1px #777 dashed;
  padding: 0 2%;
`;

export default EngP;