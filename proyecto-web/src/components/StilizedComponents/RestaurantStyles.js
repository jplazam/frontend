import React from "react";
import styled from "styled-components";

const PostContainer = styled.div`
  padding: 50px;
  img {
    width: 400px;
    height: auto;
  }
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
`;

const Section = styled.section`
  display: flex;
  flex-direction: column;
  padding: 50px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  width: 400px;
  height: auto;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 10px;
  text-align: center;
`;

const Comments = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Head = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 200px;
`;

const Rating = styled.div`
  display: flex;
  flex-direction: column;
`;

export { PostContainer, Section, Form, Comments, Head, Rating };
