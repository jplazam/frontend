import React from "react";
import { Link } from "react-router-dom";
// import styled-components
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {background: #232427;
  color: #fff;
  padding: 0%;
  margin: 0%;}`;

const NavBar = styled.div`
  padding: 0%;
  margin: 0%;
  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    background-color: rgb(207, 207, 207);
  }
  li {
    float: left;
    a {
      display: block;
      color: rgb(8, 8, 8);
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
      :hover {
        background-color: rgb(146, 146, 146);
      }
    }
  }
`;

export { GlobalStyle, NavBar };
