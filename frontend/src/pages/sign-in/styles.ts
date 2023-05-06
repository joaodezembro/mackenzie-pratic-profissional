import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-content: center;
  justify-content: center;
`;

export const Content = styled.div`
  display: grid;
  height: calc(100vh - 60px);
  grid-auto-column: max-content;
  grid-auto-row: max-content;
`;

export const Center = styled.div`
  display: grid;
  align-self: center;
  justify-self: center;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.h3}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[800]};
  margin-bottom: 24px;
  justify-self: center;
`;

export const Subtitle = styled.h2`
  display: flex;
  font-size: ${({ theme }) => theme.fonts.regular}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: 48px;
`;

export const Link = styled.a`
  font-size: ${({ theme }) => theme.fonts.regular}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.primary_branding};
  margin-bottom: 0px;
`;