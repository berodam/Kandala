import styled from 'styled-components'

const BottomLines = styled.div`
  border-top: 3px solid #999;
  border-bottom: 5px solid #999;
  padding-bottom: 10px;
  margin-top: ${ props => props.spacing || '30px'};
  margin-left: 20px;
  margin-right: 20px;
  margin-bottom: ${ props => props['margin-bottom'] || '0px' };
  @media (max-width: 576px) { 
    margin-left: 0;
    margin-right: 0;
  }
}
`

export default BottomLines;