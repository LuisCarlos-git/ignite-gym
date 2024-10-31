import styled, { css } from 'styled-components/native';

export const Image = styled.Image`
  border-radius: 8px;
`;

export const Content = styled.View`
  border-radius: 8px;
  flex: 1;

  ${({ theme }) => css`
    ${theme.utils.px(theme.space[3])}
  `}
`;

export const Heading = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.lg};
    font-family: ${theme.fonts.heading};
    color: ${theme.colors.gray100};
    margin-bottom: ${theme.space[1]};
  `}
`;

export const Text = styled.Text`
  ${({ theme }) => css`
    font-size: ${theme.fontSizes.sm};
    font-family: ${theme.fonts.body};
    color: ${theme.colors.gray200};
  `}
`;
