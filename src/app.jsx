import React from "react";
import { createStyled } from "@stitches/react";

import logoUrl from "./img/bundle-stats.png";
import "./app.css";

const { styled } = createStyled({});

const Container = styled('div', {
  margin: '0 auto',
  width: '100%',
  maxWidth: '640px',
});

const Header = styled('header', {
  textAlign: 'center',
});

const Title = styled('h1', {
  margin: '0 0 1rem',
});

const Logo = styled('img', {
	display: 'inline-block',
	width: '128px',
});

export const App = () => (
  <Container>
    <Header>
      <Title>
        <Logo src={logoUrl} alt="BundleStats" />
      </Title>
      <p className="header__description">
        BundleStats example for custom webpack config
      </p>
    </Header>
  </Container>
);
