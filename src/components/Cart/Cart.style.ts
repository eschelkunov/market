import styled from "styled-components";
import Button from "@material-ui/core/Button/Button";

export const SCCartWrapper = styled.div`
  padding-bottom: 2.5rem;
`;

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
  border-bottom: 1px solid #e9e9e9;
  padding-top: 16px;
  padding-bottom: 16px;
  & div {
    font-size: 1.17em;
    margin-top: 10px;
    margin-right: 10px;
    margin-bottom: 5px;
    padding-bottom: 2px;
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

export const SCCartCounter = styled.div`
  display: flex;
  align-items: center;
  &&& {
    border-bottom: none;
  }
`;

export const SCCartCounterButton = styled.button`
  border: none;
  background: #fff;
  &:disabled > * {
    cursor: not-allowed;
    color: #e9e9e9;
  }
`;

export const SCCounterInput = styled.input`
  width: 40px;
  height: 30px;
  margin-left: 4px;
  margin-right: 4px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  box-sizing: border-box;
`;

export const SCFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
`;
