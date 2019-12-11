import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Container = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 50px 0;
  background: #8c9eff;
  color: #fff;
`

export const LinkStyled = styled(Link)`
  color: #fff;
  font-weight: bold;
  font-size: 20px;
`