import styled from 'styled-components';

export const InputWrapper = styled.div`
display: flex;
justify-content: flex-start;
align-items: center;
padding: 20px 0;
flex-direction: column;
position: relative;
width: 50%;
border-bottom: 1px solid #c0cfff;

&::after {
  content: 'vs';
  color: #777;
  display: block;
  position: absolute;  
  right: -10px;
  top: 35px;
}

&:nth-child(2n+2) {
  &::after {
    content: none;
  }
}

.icons {
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
}

textarea {
  height: 100px;
  padding: 10px;
  resize: none;
}


svg {   
  height: 40px;    
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
height: 50px; 
`