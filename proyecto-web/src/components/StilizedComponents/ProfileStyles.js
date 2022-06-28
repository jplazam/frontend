import React from "react";
import styled from "styled-components";

const Form = styled.form`
  height: 520x;
  width: 400px;
  background-color: rgba(255, 255, 255, 0.13);
  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  border-radius: 5px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 40px rgba(8, 7, 16, 0.6);
  padding: 50px 35px;
  * {
    color: white;
    letter-spacing: 0.5px;
    outline: none;
    border: none;
  }
  h3 {
    font-size: 32px;
    font-weight: 500;
    line-height: 42px;
    text-align: center;
  }
`;

const Label = styled.label`
  display: block;
  margin-top: 35px;
  margin-bottom: 35px;
  font-size: 20px;
  font-weight: 500;
`;

export { Form, Label };