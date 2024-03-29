import styled from "styled-components";

export const SCProduct = styled.div`
  padding: 10px 15px;
  margin: 10px 20px;
  box-sizing: border-box;
  &:hover {
    box-shadow: 0 2px 16px rgba(0, 0, 0, 0.24);
  }
`;

export const SCFlexWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const SCIconInCart = styled.div`
  align-self: center;
  color: #4caf50;
`;

export const SCIconNotAvailable = styled.div`
  align-self: center;
  color: #f44336;
`;

export const SCImg = styled.img`
  width: 200px;
  height: 200px;
  overflow: hidden;
`;
