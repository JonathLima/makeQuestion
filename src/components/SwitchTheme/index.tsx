import { useState, ButtonHTMLAttributes } from "react";
import { FiMoon } from "react-icons/fi";
import { BsSun } from "react-icons/bs";
import { BtnSwitch } from "./styled";

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {};

export function SwitchTheme(props: ButtonProps) {
  const [image, setImage] = useState(false);

  const handleSwitchImage = () => {
    if (!image) {
      setImage(true);
    } else {
      setImage(false);
    }
  };

  return (
    <>
      <a onClick={handleSwitchImage}>
        <BtnSwitch {...props}>
          {image ? (
            <BsSun size={35} className="btn-moon" />
          ) : (
            <FiMoon size={35} className="btn-sun" />
          )}
        </BtnSwitch>
      </a>
    </>
  );
}
