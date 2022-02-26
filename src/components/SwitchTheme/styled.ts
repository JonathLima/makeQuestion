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

  @media (max-width: 1200px) {
    position: absolute;
    bottom: 55rem;
    right: 3rem;

    .btn-moon {
      color: ${(props) => props.theme.colors.text};
    }
    .btn-sun {
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (max-width: 520px) {
    position: absolute;
    bottom: 60rem;
    right: 3rem;

    .btn-moon {
      color: ${(props) => props.theme.colors.text};
    }
    .btn-sun {
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media (min-width: 1200px) {
    position: absolute;
    bottom: 32rem;
    right: 3rem;

    .btn-moon {
      color: ${(props) => props.theme.colors.primary};
    }
    .btn-sun {
      color: ${(props) => props.theme.colors.primary};
    }
  }

  @media (min-width: 1920px) {
    position: absolute;
    bottom: 58rem;
    right: 3rem;

    .btn-moon {
      color: ${(props) => props.theme.colors.primary};
    }
    .btn-sun {
      color: ${(props) => props.theme.colors.primary};
    }
  }
`;
