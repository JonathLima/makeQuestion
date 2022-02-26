import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  transition: 0.2s ease-out; 
  
}

body {
  background: ${(props) => props.theme.colors.background};
  color: ${(props) => props.theme.colors.text};
}

body,
input,
button,
textarea {
  font: 400 16px "Roboto", sans-serif;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.react-modal-overlay {
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  padding: 0 15px 0 15px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.react-modal-content {
  width: 100%;
  max-width: 575px;
  height: 450px;
  background: #fff;
  padding: 40px;

  position: relative;
  border-radius: 8px;

  .modal-delete {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    svg {
      max-width: 80px;
      margin-bottom: 25px;
    }

    h2 {
      font-family: "Poppins", sans-serif;
      font-size: 23px;
      color: #29292e;
      justify-content: center;
      text-align: center;
    }
  }

  .modal-button {
    display: flex;
    padding: 15px;
    align-items: center;
    justify-content: space-between;
    margin-top: 100px;
    flex-direction: row;
    gap: 80px;

    button {
      width: 100%;
      height: 50px;
      border-radius: 8px;
      font-weight: 600;
      font-size: 20px;
      text-align: center;
      background-color: #f11621;
      color: #fff;
      padding: 0 32px;

      cursor: pointer;
      border: 0;
      transition: filter 0.2s;

      &:not(:disabled):hover {
        filter: brightness(0.9);
      }

      &.btn-close {
        background-color: #835afd;
      }
    }
  }
}
`;
