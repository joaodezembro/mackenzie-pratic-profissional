import styled from "styled-components";

interface Props {
}

export const Sidebar = styled.div<Props>`
  height: 100%;
  width: 200px;
  background-color: ${({ theme }) => theme.colors.neutral[25]};
  border-right: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  display: grid;
  grid-template-rows: max-content auto max-content;
`;

export const Title = styled.a<Props>`
  font-size: ${({ theme }) => theme.fonts.h5}px;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.colors.neutral[800]};
  justify-self: center;
  text-align: center;
  padding-top: 24px;
  padding-bottom: 24px;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  user-select: none;
  cursor: pointer;
`;

export const MenuItemsGrid = styled.div<Props>`
  display: grid;
  grid-auto-rows: 60px;
  background-color: ${({ theme }) => theme.colors.neutral[50]};
`;

export const MenuItem = styled.a<Props>`
  display: grid;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fonts.regular}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: center;
  align-content: center;
  height: 100%;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
    color: ${({ theme }) => theme.colors.neutral[800]};
  }
`;

export const Logout = styled.a<Props>`
  display: grid;
  background-color: ${({ theme }) => theme.colors.neutral[200]};
  color: ${({ theme }) => theme.colors.neutral[600]};
  font-size: ${({ theme }) => theme.fonts.regular}px;
  font-weight: ${({ theme }) => theme.fontWeight.light};
  text-align: center;
  align-content: center;
  height: 60px;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.neutral[300]};
  }
`;