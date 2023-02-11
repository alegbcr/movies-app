import React from "react";
import { ButtonBase } from "./styles";

export const Button = (props) => {
  return (
    <ButtonBase style={props.style} onClick={props.handleAction}>
      {props.text}
    </ButtonBase>
  );
};
