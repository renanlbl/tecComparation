import styled from 'styled-components';

export const InputWrapper = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin-bottom: 20px;
height: 40px;
position: relative;
width: 50%;

&::after {
  content: 'vs';
  color: #777;
  display: block;
  position: absolute;  
  right: -10px;
  top: 10px;
}

&:nth-child(2n+2) {
  &::after {
    content: none;
  }
}


svg {   
  height: 100%;    
  color: #fff;
  width: 40px;
  padding: 0 12px;
  background-color: tomato;
  cursor: pointer;
  margin-left: 5px;

  &:nth-child(2) {
    background: #719c19;
  }

  &:last-child {
    background: #0043ca;    
  }
}
`

export const Input = styled.input`  
padding-left: 7px;
height: 100%; 
`