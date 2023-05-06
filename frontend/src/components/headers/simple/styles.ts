import styled from "styled-components";

interface Props {
}

export const Header = styled.header<Props>`
  height: calc(60px - 24px);
  width: calc(100vw - 24px);
  background-color: ${({ theme }) => theme.colors.primary_branding};
  display: grid;
  padding: 12px;
`;

export const Title = styled.span<Props>`
  font-size: ${({ theme }) => theme.fonts.h5}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.white};
`;