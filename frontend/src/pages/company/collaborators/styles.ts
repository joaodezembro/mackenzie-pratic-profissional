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

export const Header = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  gap: 16px;
  margin-bottom: 24px;
`;

export const List = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  gap: 16px;
  border-top: 1px solid ${({ theme }) => theme.colors.neutral[50]};
  padding-top: 14px;
  padding-bottom: 24px;
`;

export const ItemList = styled.button`
  display: grid;
  grid-template-columns: max-content auto;
  width: 400px;
  padding: 8px 16px 8px 16px;
  border: 1px solid ${({ theme }) => theme.colors.neutral[200]};
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 12px;
  gap: 6px;

  &:hover {
    background-color: #fafafa;
  }
`;

export const ItemListTitle = styled.span`
  font-size: ${({ theme }) => theme.fonts.medium}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral[800]};
  align-content: center;
  align-items: center;
  align-self: center;
`;

export const ItemListActions = styled.div`
  display: grid;
  grid-auto-columns: max-content;
  grid-auto-flow: column;
  gap: 6px;
  justify-self: end;
  align-content: center;
  align-items: center;
`;

export const ItemListActionsButton = styled.img`
`;

export const Modal = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  height: 100vh;
  width: 100vw;
  background-color: rgba(5, 5, 5, 0.56);
  z-index: 100;
  display: grid;
`;

export const ModalContainer = styled.div`
  display: grid;
  grid-auto-rows: max-content;
  width: 400px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 24px;
  border-radius: 16px;
  align-self: center;
  justify-self: center;
  font-size: ${({ theme }) => theme.fonts.medium}px;
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  color: ${({ theme }) => theme.colors.neutral[800]};
`;