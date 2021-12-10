import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import PersonOne from "../images/boy.svg";
import PersonTwo from "../images/girl1.svg";
import PersonThree from "../images/girl2.svg";

const Section = styled.section`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #131313;
`;
const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
  padding: 3rem calc((100vw - 1300px) / 2);

  @media screen and (max-width: 768px) {
    grid-grid-template-columns: 1fr;
  }
`;
const ColumnLeft = styled.div`
  display: flex;
  color: #fff;
  flex-direction: column;
  flex-content: center;
  align-items: flex-start;
  padding: 5rem 2 rem;

  h1 {
    margin-bottom: 0.5rem;
    font-size: 2rem;
  }
  p {
    margin: 2rem 0;
    font-size: 4rem;
    line-height: 1.1;
  }
`;

const Button = styled.div`
  padding: 1rem 3rem;
  font-size: 1rem;
  border: 2px solid #fff;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  background: transparent;
`;
const Image = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  max-width: 240px;
  max-height: 240px;
`;

const ColumnRight = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  position: relative;

  ${Image}:nth-child(1) {
    top: 10px;
    left: 10px;
  }
  ${Image}:nth-child(2) {
    top: 170px;
    right: 10px;
  }
  ${Image}:nth-child(3) {
    bottom: 100px;
    right: 75px;
  }
`;

const Hero = () => {
  const fadeLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };
  return (
    <Section>
      <Container>
        <ColumnLeft>
          <motion.h1
            initial={{ opacity: 0 }} // begining
            animate={{ opacity: 1 }} // animate to ..
            transition={{ opacity: 1 }} // seconds
          >
            Welcome to Space
          </motion.h1>
          <motion.p
            variants={fadeLeft}
            initial="hidden"
            animate="visible"
            transition={{ duration: 1 }}
          >
            Journey to the unknown
          </motion.p>
          <Button>Get Started</Button>
        </ColumnLeft>
        <ColumnRight>
          <Image src={PersonOne} alt="man" />
          <Image src={PersonTwo} alt="man" />
          <Image src={PersonThree} alt="man" />
        </ColumnRight>
      </Container>
    </Section>
  );
};

export default Hero;
