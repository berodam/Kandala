import styled from 'styled-components';

export const KorP = styled.p`
  font-family: 'MSugiJeong', serif;
  font-size: ${(props) => props.fontsize || 3}rem;
  color: #777;
  margin: 0 0.5em 0 0;
  border: 1px #777 dashed;
  letter-spacing: -5px;
  padding: 2%;
  flex: 2;
  & h1 {
    font-size: ${(props) => props.fontsize+1 || 3}rem;
    display: inline-block;
    margin-bottom: 0;
  }
  & h2 {
    display: inline-block;
    margin-bottom: 0;
  }
  & p {
    margin-bottom: 0;
  }
  @media all and (max-width: 425px) {
    font-size: 2rem;
    letter-spacing: -5px;
  }
  @media all and (max-width: 991px) { 
    margin: 0;  
  }
`
export default KorP;

