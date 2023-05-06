import React from "react";

import { Container } from "./styles";

interface ISimpleButtonProps {
  title: string;
  width?: number | string;
  height?: number;
  marginTop?: number;
  marginRight?: number;
  marginBottom?: number;
  color?: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: number;
  onClick?: () => void;
  disabled?: boolean;
  padding?: string;
  type?: "button" | "submit";
}

export const SimpleButton = (props: ISimpleButtonProps) => (
  <Container
    padding={props.padding ?? "0 24px"}
    width={props.width}
    height={props.height}
    marginTop={props.marginTop}
    marginBottom={props.marginBottom}
    marginRight={props.marginRight}
    color={props.color}
    labelColor={props.labelColor}
    labelSize={props.labelSize}
    labelWeight={props.labelWeight}
    onClick={props.onClick}
    disabled={props.disabled}
    type={props.type}
  >
    {props.title}
  </Container>
);
