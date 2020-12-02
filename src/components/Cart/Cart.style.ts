import styled from "styled-components";
import Button from "@material-ui/core/Button/Button";

export const SCCart = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1.5 rem;
  color: gray;
  margin: 0 15px;
  padding: 0 10px;
  & h3 {
    margin: 0;
    padding: 0;
  }
  & svg {
    color: red;
    cursor: pointer;
  }
`;

export const SCCartHeader = styled.h2``;

export const SCWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  & div {
    font-size: 1.17em;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    padding-bottom: 2px;
    border-bottom: 1px dashed #3f51b5;
  }
`;

export const SCIndex = styled.div``;
export const SCProductName = styled.div`
  flex: 1;
`;
export const SCProductPrice = styled.div``;
export const SCButton = styled(Button)`
  margin: 15px 0;
`;

export const SCSum = styled.h2``;
export const SCInvisibleCounter = styled.div`
  display: none;
`;
