import styled from "styled-components";

export const DualColumn = styled.div<{ size?: number }>`
  display: grid;
  grid-template-columns: ${({size}) => `${size ?? 369}px ${size ?? 369}px`};
  gap: 16px;
  width: ${({size}) => `${size}px` ?? "auto"}
`

export const DualAutoColumn = styled.div<{
  gridTemplateColumns?: string;
  gridAutoRows?: string;
  rowGap?: number, 
  columnGap?: number,
  marginTop?: number
}>`
  display: grid;
  height: 100%;
  grid-template-columns: ${({ gridTemplateColumns }) => gridTemplateColumns ?? "max-content max-content"};
  grid-auto-rows: ${({ gridAutoRows }) => gridAutoRows ?? "auto"};
  column-gap: ${({ columnGap }) => `${columnGap ?? 8}px`};
  row-gap: ${({ rowGap }) => `${rowGap ?? 8}px`};
  margin-top: ${({ marginTop }) => `${marginTop ?? 0}px`};
`


export const TripleColumn = styled.div`
  display: grid;
  grid-template-columns: 369px 110px 243px;
  gap: 16px;
`