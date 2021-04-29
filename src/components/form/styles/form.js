import styled from "styled-components";
import { Link as ReachRouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 660px;
  background-color: rgba(0, 0, 0, 0.75);
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 68px 40px;
  margin-bottom: 100px;
`;

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`;

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 2.2em;
  margin-bottom: 1.2em;
`;

export const Text = styled.h1`
  color: #737373;
  font-size: 1.1em;
  font-weight: 500;
`;

export const TextSmall = styled.h2`
  color: #8c8c8c;
  font-weight: 500;
  font-size: 0.9em;
`;

export const Link = styled(ReachRouterLink)`
  text-decoration: none;
  color: white;
  font-size: 1.1em;

  &:hover {
    text-decoration: underline;
  }
`;

export const Input = styled.input`
  background: #333;
  height: 50px;
  margin-bottom: 20px;
  border-radius: 5px;
  border: 0;
  color: white;
  padding: 5px 20px;

  &:last-of-type {
    margin-bottom: 40px;
  }
`;

export const Submit = styled.button`
  background: #e50914;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  margin: 0 0 15px;
  padding: 16px;
  border: 0;
  color: white;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
  }
`;
