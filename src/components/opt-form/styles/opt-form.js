import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  margin-top: 1.2em;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 0.8em;
  height: 60px;
  box-sizing: border-box;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 32px;
  font-size: 26px;
  border: 0;
  cursor: pointer;
  

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 1.1em;

    @media (max-width: 1000px) {
      width: 1em;
    }
}

    &:hover: {
      background: #f40612;
    }

    @media (max-width: 1000px) {
      height: 50px;
      font-size: 1em;
      margin-top: 1.1em;
      font-weight: bold;
    }
  }
`;

export const Text = styled.p`
  font-size: 1.3em;
  color: white;
  font-weight: bold;
  text-align: center;
`;
