import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h5`
  font-size: ${({ theme }) => theme.fonts.h5}px;
  color: ${({ theme }) => theme.colors.neutral[800]};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 29.05px;
  margin-bottom: 32px;
`;

export const ForgotPassword = styled.button`
  border: none;
  background: ${({ theme }) => theme.colors.white};
  height: 15px;
  align-self: end;
  margin-top: 8px;
  color: ${({ theme }) => theme.colors.primary_branding};
  font-size: ${({ theme }) => theme.fonts.small}px;
  font-weight: ${({ theme }) => theme.fontWeight.medium};
`;

export const ActionContent = styled.div`
  align-self: end;
  margin-top: 8px;
  display: flex;
`;
