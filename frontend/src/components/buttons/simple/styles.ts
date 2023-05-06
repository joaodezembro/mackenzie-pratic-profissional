import styled from "styled-components";

interface Props {
  width?: number | string;
  height?: number;
  marginTop?: number;
  marginBottom?: number;
  marginRight?: number;
  color?: string;
  labelColor?: string;
  labelSize?: number;
  labelWeight?: number;
  padding: string;
  disabled?: boolean;
}

export const Container = styled.button<Props>`
  border: none;
  border-radius: 12px;
  width: ${({ width }) => width}px;
  min-width: 95px;
  height: ${({ height }) => height}px;
  min-height: 35px;
  margin-top: ${({ marginTop }) => marginTop ?? "28"}px;
  margin-bottom: ${({ marginBottom }) => marginBottom ?? "0"}px;
  background: ${({ color, theme, disabled }) => disabled ? theme.colors.neutral[400] : color ?? theme.colors.primary_branding};
  color: ${({ labelColor, theme }) => labelColor ?? theme.colors.white};
  font-size: ${({ labelSize, theme }) => labelSize ?? theme.fonts.regular}px;
  font-weight: ${({ labelWeight, theme }) => labelWeight ?? theme.fonts.medium};
  padding: ${p => p.padding};
  ${({ marginRight }) => marginRight && `margin-right: ${marginRight}px`};
`;
