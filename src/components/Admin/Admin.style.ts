import styled from "styled-components";
import { Input } from "@material-ui/core";
import { InputLabel } from "@material-ui/core";
import Button from "@material-ui/core/Button/Button";

export const SCAdminWrapper = styled.div`
  font-family: "Roboto", "Helvetica", "Arial", sans-serif;
  font-weight: bold;
  font-size: 1.5 rem;
  color: gray;
  margin: 0 15px;
  padding: 0 10px;
`;

export const SCFormHeader = styled.h2`
  padding: 10px;
`;
export const SCWrapper = styled.div``;
export const SCFlexWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  & > div {
    flex: 1;
    padding: 0 10px;
  }
`;
export const SCInputLabel = styled(InputLabel)`
  padding: 0 10px;
  flex: 0 0 360px;
`;

export const SCButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px;
  margin-top: 20px;
`;
export const SCInput = styled(Input)``;
export const SCSpan = styled.span`
  color: red;
  font-weight: 500;
`;

export const SCButton = styled(Button)`
  margin: 15px 0;
`;
