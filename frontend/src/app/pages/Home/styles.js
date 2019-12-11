import styled from 'styled-components';


export const Container = styled.section`
  width: 100%;  
  background: white;  
  margin: 20px 0;
  padding: 70px 20px;
  border-radius: 4px;
  display: flex;
`

export const Separator = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  & + div {
    border-left: 1px solid #eee;
  }
`