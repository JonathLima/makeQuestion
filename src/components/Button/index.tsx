import { ButtonHTMLAttributes } from "react";

import { BtnComponent } from "./styles";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  isOutlined?: boolean;
};

export function Button({ isOutlined = false, ...props }: ButtonProps) {
  return (
    <BtnComponent
      className={` button ${isOutlined ? "outlined" : ""}`}
      {...props}
    />
  );
}
