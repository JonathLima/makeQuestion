import styled from "styled-components";

export const BtnSwitch = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  outline: 0;
  border: 0;
  cursor: pointer;
  background: none;

  .btn-moon {
    color: ${(props) => props.theme.colors.primary};
  }
  .btn-sun {
    color: ${(props) => props.theme.colors.primary};
  }
`;
