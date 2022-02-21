import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  aside {
    flex: 7;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text};
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 120px 80px;

    img {
      max-width: 320px;
    }

    strong {
      font: 700 36px "Poppins", sans-serif;
      line-height: 42px;
      margin-top: 16px;
    }

    p {
      font-size: 24px;
      line-height: 32px;
      margin-top: 16px;
      color: ${(props) => props.theme.colors.text};
    }
  }

  .header-content {
    display: inline-block;
    margin-bottom: 10rem;
    margin-left: 50rem;
    justify-content: center;
    align-items: center;
  }

  main {
    flex: 8;
    padding: 0 32px;
    margin-bottom: 20rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .main-content {
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 320px;
    align-items: stretch;
    text-align: center;

    > img {
      align-self: center;
    }

    h2 {
      font-size: 24px;
      margin: 64px 0 24px;
      font-family: "Poppins", sans-serif;
    }

    form {
      input {
        height: 50px;
        border-radius: 8px;
        padding: 0 16px;
        background-color: ${(props) => props.theme.colors.background};
        border: 1px solid ${(props) => props.theme.colors.primary};
        color: ${(props) => props.theme.colors.text};
      }

      button {
        margin-top: 16px;
      }

      button,
      input {
        width: 100%;
      }
    }

    p {
      font-size: 14px;
      color: ${(props) => props.theme.colors.text};
      margin-top: 16px;
      a {
        color: ${(props) => props.theme.colors.primary};
      }
    }
  }

  .create-room {
    margin-top: 64px;
    height: 50px;
    border-radius: 8px;
    font-weight: 600;
    background-color: #ea4335;
    color: #fff;

    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border: 0;
    transition: filter 0.2s;

    img {
      margin-right: 8px;
    }

    &:hover {
      filter: brightness(0.9);
    }
  }

  .separator {
    font-size: 14px;
    color: #a8a8b3;
    margin: 32px 0;
    display: flex;
    align-items: center;

    &::before {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-right: 16px;
    }
    &::after {
      content: "";
      flex: 1;
      height: 1px;
      background-color: #a8a8b3;
      margin-left: 16px;
    }
  }
`;
