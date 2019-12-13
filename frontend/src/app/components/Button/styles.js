import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const ButtonJS = styled(Link)`
  padding: 10px 20px;
  border: 0;
  float: right;
  background: #8c9eff;
  color: #fff;
  font-weight: bold;

  &::after {
    content: '';
    clear: both;
  }
`