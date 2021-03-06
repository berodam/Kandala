import styled from 'styled-components';

export const EngP = styled.p`
  font-family: 'AmaticSC-Bold', serif;
  font-size: ${(props) => props.fontsize || 3}rem;
  color: #777;
  margin: 0 0 0 0.5em;
  border: 1px #777 dashed;
  padding: 0 2%;
  flex: 2;
  & h1 {
    font-size: ${(props) => props.fontsize+1 || 3}rem;
    display: inline-block;
  }
  & h2 {
    display: inline-block;
  }
  & p {
    margin-bottom: 0;
  }
  @media all and (max-width: 425px) {
    font-size: 2rem;
  }
  @media all and (max-width: 991px) { 
    margin: 0;  
  }
`;

export default EngP;