import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  max-width: 815px;
  margin: auto;
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
  font-size: 1.5em;

  &:first-of-type {
    margin-top: 3em;
  }
`;

export const Title = styled.h1`
color: white;
font-size: 3.5em;
line-height: 1.1
margin-top: 0;
margin-bottom: 8px;
text-align: center;


@media (max-width: 600px ){
    font-size: 1.8em;
}

`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  box-sizing: border-box;
  margin-bottom: 1px;
  font-size: 1.1em;
  font-weight: normal;
  background-color: #303030;
  padding: 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  img {
    filter: brightness(0) invert(1);
    width: 1.3em;
  }

  @media (max-width: 600px) {
    img {
      width: 1em;
    }
  }

  @media (max-width: 600px) {
    font-size: 0.9em;
  }
`;

export const Body = styled.div`
  //   max-width: 1200px;
  box-sizing: border-box;
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 0.8em 1.2em 0.8em 1.2em;
  user-select: none;
  align-items: center;
  width: 100%;

  @media (max-width: 600px) {
    font-size: 0.8em;
    line-height: 22px;
  }
`;
