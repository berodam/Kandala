import styled from 'styled-components'

const TopLine = styled.div`
  border-top: 3px solid #999;
  margin-bottom: ${ (props) => props.spacing || '30px'};
  margin-left: 20px;
  margin-right: 20px;
  @media (max-width: 576px) { 
    margin-left: 0;
    margin-right: 0;
  }
`

export default TopLine;