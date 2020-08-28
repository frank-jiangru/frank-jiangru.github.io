import React from 'react';

import Container from 'components/ui/Container';

import * as Styled from './styles';

const Footer = () => (
  <Styled.Footer>
    <Container>
      <Styled.Links>
        <Styled.Link href="https://www.github.com/frankjiangru" rel="noreferrer noopener" target="_blank">
          GitHub
        </Styled.Link>
        <Styled.Link
          href = "https://public.tableau.com/profile/frank.jiang#!/?newProfile=&activeTab=0"
          rel="noreferrer noopener"
          target="_blank"
        >
          Tableau
        </Styled.Link>
        <Styled.Link href="https://www.linkedin.com/in/frank-jiang-rutgers" rel="noreferrer noopener" target="_blank">
          LinkedIn
        </Styled.Link>
      </Styled.Links>
    </Container>
  </Styled.Footer>
);

export default Footer;
