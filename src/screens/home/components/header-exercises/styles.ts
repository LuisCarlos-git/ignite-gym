import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    margin-top: ${theme.space[1]};
    justify-content: space-between;
    flex-direction: row;
  `}
`;

export const Heading = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.md};
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.gray200};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.fonts.body};
    color: ${theme.colors.gray200};
  `}
`;
