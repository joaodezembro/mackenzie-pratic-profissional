import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  align-content: center;
`;

export const Content = styled.div`
  display: grid;
  height: calc(100vh - 60px);
  grid-auto-column: max-content;
  grid-auto-rows: max-content;
`;

export const Left = styled.div`
  display: grid;
  max-width: 400px;
  padding: 32px;
  grid-auto-rows: max-content;
`;

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.fonts.h3}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[800]};
  margin-bottom: 24px;
`;

export const Subtitle = styled.h2`
  display: block;
  font-size: ${({ theme }) => theme.fonts.regular}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.colors.neutral[600]};
  margin-bottom: 24px;
`;

export const Form = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  gap: 12px;
`;