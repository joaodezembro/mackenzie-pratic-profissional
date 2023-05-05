interface CSSProperties {
  margin?: string;
  marginTop?: string;
  marginBottom?: string;
  marginLeft?: string;
  marginRight?: string;
  padding?: string;
  paddingTop?: string;
  paddingBottom?: string;
  paddingLeft?: string;
  paddingRight?: string;
  width?: string;
  height?: string;
  backgroundColor?: string;
  display?: React.CSSProperties['display'];
  flexDirection?: React.CSSProperties['flexDirection'];
  alignItems?: React.CSSProperties['alignItems'];
  alignContent?: React.CSSProperties['alignContent'];
  justifyContent?: string;
  gap?: string;
  position?: React.CSSProperties['position'];
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  transform?: string;
  borderRadius?: string;
  border?: string;
  borderColor?: string;
  boxShadow?: string;
  overflow?: string;
}

export type CSSPropertiesWithShorthand = CSSProperties & {
  mt?: string;
  mb?: string;
  pt?: string;
  pb?: string;
  mw?: string;
  b?: string;
  fontSize?: string | number;
  fontWeight?: string | number;
  lineHeight?: string;
  textAlign?: React.CSSProperties['textAlign']
  textDecoration?: string;
  textTransform?: React.CSSProperties['textTransform']
  color?: any;
}