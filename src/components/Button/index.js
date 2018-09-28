import styled from 'styled-components';

export const Button = styled.button`
  background-color:#785454;
  border:1px solid #ffffff;
  display:inline-block;
  cursor:pointer;
  color:#ffffff;
  font-family:Arial;
  font-size:13px;
  font-weight:bold;
  padding:10px 25px;
  text-decoration:none;
  &:hover {
    background-color:#946e6e;
  }
  &:active {
    position:relative;
    top:1px;
  }
`

export default Button;
