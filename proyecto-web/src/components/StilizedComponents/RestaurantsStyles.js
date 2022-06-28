import React from "react";

// import styled-components
import styled from "styled-components";

const Card = styled.div`
  position: relative;
  min-width: 320px;
  height: 440px;
  box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
    inset -5px -5px 15px rgba(255, 255, 255, 0.1),
    5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  margin: 30px;
  transition: 0.5s;
`;

const Box = styled.div`
  position: absolute;
  top: 20px;
  left: 20px;
  right: 20px;
  bottom: 20px;
  background: #2a2b2f;
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: 0.5s;
  :hover {
    background-color: rgb(20, 20, 20);
  }
`;

const Content = styled.div`
  padding: 20px;
  text-align: center;
  h2 {
    position: absolute;
    top: -20px;
    right: 30px;
    font-size: 2rem;
    color: rgba(255, 255, 255, 0.1);
  }
  h3 {
    font-size: 1.8rem;
    color: #fff;
    z-index: 1;
    transition: 0.5s;
    margin-bottom: 15px;
  }
  p {
    font-size: 1rem;
    font-weight: 300;
    color: rgba(255, 255, 255, 0.9);
    z-index: 1;
    transition: 0.5s;
  }
  a {
    position: absolute;
    bottom: 30px;
    right: 110px;
    display: inline-block;
    padding: 8px 20px;
    background: black;
    border-radius: 5px;
    text-decoration: none;
    color: white;
    margin-top: 20px;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
    background: #e91e63;
    :hover {
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.6);
      background: #fff;
      color: #000;
    }
  }
  img {
    width: 200px;
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 80%;
  margin: 40px 0;
`;

const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  min-height: 100vh;
`;

export { Card, Box, Body, Container, Content };
