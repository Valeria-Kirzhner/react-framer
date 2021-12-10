import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-colums: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-colums: 1fr;
  }
`;

const Hero = () => {
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <h1>Welcome to Space</h1>
          <p>Journey to the unknown</p>
          <Button>Get Started</Button>
        </ColumnLeft>
      </Container>
    </Section>
  );
};

export default Hero;
