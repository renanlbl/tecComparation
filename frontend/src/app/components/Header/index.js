import React from 'react';
import { Container, LinkStyled } from './styles.js';


export default function Header(props) {
  return (
    <Container>
      <div className="content">
        <LinkStyled to="/">Inicio</LinkStyled>
      </div>
    </Container>
  )
}