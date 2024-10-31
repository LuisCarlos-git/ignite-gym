import styled, { css } from 'styled-components/native';

export const Container = styled.View`
  ${({ theme }) => css`
    padding-top: ${theme.space[16]};
    padding-bottom: ${theme.space[5]};

    background: ${theme.colors.gray600};
    justify-content: center;
    align-items: center;
  `}
`;
export const Heading = styled.Text`
  ${({ theme }) => css`
    color: ${theme.colors.gray100};
    font-family: ${theme.fonts.heading};
    font-size: ${theme.fontSizes.lg};
  `}
`;
